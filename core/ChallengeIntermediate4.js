const Challenge = require('./Challenge');

class ChallengeIntermediate4 extends Challenge {

    constructor () {
        super(4, "intermediate");
    }

    async solve() {
        const readLineSync = require('readline-sync');
        
        let input;
        while (input !== 'q') {
            input = readLineSync.question("Press q to exit or enter a calculator input: ");
            if (input.match(/^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/g)) {
                console.log(`The answer is ${eval(input.replace(/[^-()\d/*+.]/g, ''))}`);
            } else {
                console.log("Invalid input");
            }
        }
    }
}

module.exports = ChallengeIntermediate4