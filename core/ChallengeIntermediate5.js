const Challenge = require('./Challenge');

class ChallengeIntermediate5 extends Challenge {

    constructor () {
        super(5, "intermediate");
    }

    async solve() {
        const fs = require('fs');
        const words = fs.readFileSync(`resources/anagrams.txt`).toString().split("\n");

        let set = new Set();
        words.forEach(word => {
            set.add(this.sort(word));
        });

        console.log(`Total amount of anagrams: ${(words.length - set.size) * 2}`);
    }

    sort(str) {
        return str.toLowerCase().split('').sort().join('').trim();
    }
}

module.exports = ChallengeIntermediate5