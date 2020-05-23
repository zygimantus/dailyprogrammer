const Challenge = require('./Challenge');

class ChallengeHard1 extends Challenge {

    constructor() {
        super(1, "hard");
    }

    async solve() {
        const readLineSync = require('readline-sync')

        let guessed = false;
        let range1 = 1, range2 = 100;
        let input;
        
        while (!guessed) {
            let guess = Math.floor((range1 + range2) / 2);
            console.log(`Your number is ${guess}`);
            input = readLineSync.question("(Y)es / Too (H)igh / Too (L)ow: ");
            if (input === 'Y') {
                guessed = true;
            } else if (input === 'H') {
                range1 = guess;
            } else if (input === 'L') {
                range2 = guess;
            }
        }
    }
}

module.exports = ChallengeHard1