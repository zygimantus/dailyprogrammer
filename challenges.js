module.exports = {

    // TODO make a class for a challenge when there are more of them
    async solve_challenge(number) {

        let challenge;
        if (number == 1) {
            const ChallengeEasy1 = require('./lib/ChallengeEasy1');
            challenge = new ChallengeEasy1();
        }

        if (number == 2) {
            const ChallengeIntermediate1 = require('./lib/ChallengeIntermediate1');
            challenge = new ChallengeIntermediate1();
        }
        challenge.inform();
        await challenge.solve();
    }
}