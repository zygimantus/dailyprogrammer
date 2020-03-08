module.exports = {

    async run() {

        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question = (str) => new Promise(resolve => rl.question(str, resolve));
        const name = await question("What is your name? ");
        const age = await question("How old are you? ");
        const username = await question("What is your reddit username? ");

        const output = `Your name is ${name}, you are ${age} years old, and your username is ${username}`;

        const fs = require('fs');
        fs.writeFileSync('output.txt', output);

        console.log(output);
        rl.close();
    }
}