const Challenge = require('./Challenge');

class ChallengeHard3 extends Challenge {

    constructor() {
        super(2, "intermediate");
    }

    async solve() {
        const fs = require('fs');
        let scrambled = fs.readFileSync(`resources/scrambled.txt`).toString().split("\n");
        let wordlist = fs.readFileSync(`resources/wordlist.txt`).toString().split("\n");

        let wordlist_sums = this.sum_of_ascii_values(wordlist);
        let scrambled_sums = this.sum_of_ascii_values(scrambled);
        
        let result = [];
        for (let index = 0; index < scrambled_sums.length; index++) {
            let scrambled_sum = scrambled_sums[index];
            for (let j = 0; j < wordlist_sums.length; j++) {
                let sum = wordlist_sums[j];
                if (sum == scrambled_sum && this.have_same_chars(scrambled[index], wordlist[j])) {
                    result.push(wordlist[j]);
                }
            }
        }
        console.log(result.sort(function(a, b) {
            // ASC  -> a.length - b.length
            // DESC -> b.length - a.length            
            return b.length < a.length;
        }));
    }

    sum_of_ascii_values(array) {
        let output = [];
        for (const i in array) {
            let str = array[i];
            let sum = 0;
            for (let j = 0; j < str.length; j++) {
                sum += str.charCodeAt(j);
            }
            output[i] = sum;
        }
        return output;
    }

    have_same_chars(str1, str2) {
        const arr1 = str1.split('');
        const arr2 = str2.split('');
        return arr1.sort().toString() == arr2.sort().toString();
    }
}

module.exports = ChallengeHard3