const Challenge = require('./Challenge');

class ChallengeEasy2 extends Challenge {

    constructor () {
        super(2, "easy");
    }

    async solve() {
        const readLineSync = require('readline-sync')
        
        let input;
        while (input !== '0') {
            console.log("0) exit")
            console.log("1) add")
            console.log("2) substract")
            console.log("3) multiply")
            console.log("4) divide")
            console.log("5) F=ma calculation")
            input = readLineSync.question("Pick an operation: ");
            let result;
            if (input === '5') {

                let variable = readLineSync.question("Enter variable from formula F=ma to calulcate: ");
                if (variable === 'F') {
                    let m = readLineSync.question("Enter m: ");
                    let a = readLineSync.question("Enter a: ");
                    result = m * a;
                } else if (variable === 'm') {
                    let F = readLineSync.question("Enter F: ");
                    let a = readLineSync.question("Enter a: ");
                    result = F / a;
                } else if (variable === 'a') {
                    let F = readLineSync.question("Enter F: ");
                    let m = readLineSync.question("Enter m: ");
                    result = F / m;
                }
                console.log(`Calculated value of ${variable} is ${result}`);

            } else if (input > 0) {
                let number1 = readLineSync.question("Enter number1: ");
                let number2 = readLineSync.question("Enter number2: ");

                if (input === '1') {
                    result = number1 + number2;
                } else if (input === '2') {
                    result = number1 - number2;
                } else if (input === '3') {
                    result = number1 * number2;
                } else if (input === '4') {
                    result = number1 / number2;
                }

                console.log(`The answer is ${result}`);
            }
        }
    }
}

module.exports = ChallengeEasy2