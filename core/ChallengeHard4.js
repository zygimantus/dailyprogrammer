const Challenge = require('./Challenge');

class ChallengeHard4 extends Challenge {

    constructor () {
        super(4, "intermediate");
    }

    async solve() {
        const fs = require('fs');
        const series_of_numbers = fs.readFileSync(`resources/series_of_numbers.txt`).toString().split("\n");

        const operations = ["+", "-", "*", "/"];
        let combinations = [];

        // TODO deal with strings of greater than three numbers

        series_of_numbers.forEach(element => {
            const numbers = element.split(", ");
            const size = numbers.length;
            this.permutations(numbers, size, function (array) {
                operations.forEach(op => {
                    let combination = "";
                    for (let i = 0; i < size - 1; i++) {
                        combination = combination + array[i];                        
                        if (i + 2 != size) {
                            combination = combination + op;
                        }
                    }
                    combination = combination + "==" + array[size - 1];
                    if (eval(combination)) {
                        combinations.push(combination);
                    }
                });
            });
        });
        console.log(combinations);
    }

    permutations(array, size, callback) {
        if (size == 1) {
            callback(array);
            return;
        }
        for (let i=0; i < size; i++) {
            this.permutations(array, size-1, callback);
            if (size % 2) {
                [array[0], array[size-1]] = [array[size-1], array[0]];
            } else {
                [array[i], array[size-1]] = [array[size-1], array[i]];
            }
        }
    }        
}

module.exports = ChallengeHard4