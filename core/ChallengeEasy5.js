const Challenge = require('./Challenge');

class ChallengeEasy5 extends Challenge {

    constructor () {
        super(5, "easy");
    }

    async solve() {
        const fs = require('fs');
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question = (str) => new Promise(resolve => rl.question(str, resolve));
        const username = await question("What is your username? ");
        const password = await question("What is your password? ");

        const words = fs.readFileSync(`resources/credentials.txt`).toString().split("\n");

        if (username == words[0] && password == words[1]) {
            console.log("Successfully loged in.");
        } else {
            console.log("Wrong credentials.");
            process.exit();
        }

    }
}

module.exports = ChallengeEasy5