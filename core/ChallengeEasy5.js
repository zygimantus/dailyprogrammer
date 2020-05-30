const Challenge = require('./Challenge');

class ChallengeEasy5 extends Challenge {

    constructor () {
        super(5, "easy");
    }

    async solve() {
    }
}

module.exports = ChallengeEasy5