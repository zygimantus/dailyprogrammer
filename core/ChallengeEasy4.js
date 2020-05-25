const Challenge = require('./Challenge');

class ChallengeEasy4 extends Challenge {

    constructor () {
        super(4, "easy");
    }

    async solve() {
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question = (str) => new Promise(resolve => rl.question(str, resolve));
        const amount = await question("How many passwords to generate? ");
        const length = await question("What is the length of a password? ");

        const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');

        let output = "";
        for (let i = 0; i < amount; i++) {
            for (let j = 0; j < length; j++) {
                output += alphabet[Math.floor(Math.random() * alphabet.length)];
            }
            output += "\n";
        }

        const fs = require('fs');
        fs.writeFileSync('output.txt', output);
        rl.close();
    }
}

module.exports = ChallengeEasy4