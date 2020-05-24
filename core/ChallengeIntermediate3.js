const Challenge = require('./Challenge');

class ChallengeIntermediate3 extends Challenge {

    constructor () {
        super(1, "intermediate");
    }

    async solve() {
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question = (str) => new Promise(resolve => rl.question(str, resolve));

        const alphabet = "abcdefghijklmnopqrstuvwxyz 123456789!@#$%^&*()-+";
        let cipher_alphabet = "phqgiumeaylnofdxjkrcvstzwb 987654321+-)(*&^%$#@!";

        let input = await question(`Enter the cipher alphabet or use [${cipher_alphabet}]: `);
        cipher_alphabet = (input.length != 26) ? cipher_alphabet : input;

        input = await question("(E)ncrypt or (D)ecrypt: ");
        let output;
        if (input === 'E') {
            const text = await question("Enter a text to encrypt: ");
            output = this.substitute(text, alphabet, cipher_alphabet);
        } else if (input === 'D') {
            const text = await question("Enter a text to decrypt: ");
            output = this.substitute(text, cipher_alphabet, alphabet);
        }

        console.log(output);
        rl.close();
    }

    substitute(text, alphabet, cipher_alphabet) {
        const cipher = cipher_alphabet.split('');
        const input = text.split('');
        let output = [];

        for (let i = 0; i < input.length; i++) {
            let index = alphabet.split('').findIndex(letter => letter == input[i]);
            output[i] = cipher[index];
        }
        return output.join("");
    }

}

module.exports = ChallengeIntermediate3