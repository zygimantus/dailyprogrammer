const Challenge = require('./Challenge');

class ChallengeEasy3 extends Challenge {

    constructor () {
        super(1, "easy");
    }

    async solve() {
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question = (str) => new Promise(resolve => rl.question(str, resolve));

        const shift = await question("Enter the shift parameter to use: ");

        const input = await question("(E)ncrypt or (D)ecrypt: ");
        let output;
        if (input === 'E') {
            const text = await question("Enter a text to encrypt: ");
            output = this.encrypt(text, parseInt(shift));
        } else if (input === 'D') {
            const text = await question("Enter a text to decrypt: ");
            output = this.decrypt(text, parseInt(shift));
        }

        console.log(output);
        rl.close();
    }

    encrypt(text, shift) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
        const input = text.split('');
        let output = [];

        for (let i = 0; i < input.length; i++) {
            let index = alphabet.findIndex(letter => letter == input[i]);
            let shifted_index = (index + shift) % 26;
            output[i] = alphabet[shifted_index];
        }
        return output.join("");
    }

    decrypt(text, shift) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
        const input = text.split('');
        let output = [];

        for (let i = 0; i < input.length; i++) {
            let index = alphabet.findIndex(letter => letter == input[i]);
            let shifted_index = (index - shift) % 26;
            output[i] = alphabet[shifted_index];
        }
        return output.join("");
    }
}

module.exports = ChallengeEasy3