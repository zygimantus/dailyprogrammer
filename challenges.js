module.exports = {

    // TODO make a class for a challenge when there are more of them
    async solve_challenge(number) {

        let challenge;
        if (number == 1) {
            const ChallengeEasy1 = require('./core/ChallengeEasy1');
            challenge = new ChallengeEasy1();
        }
        if (number == 2) {
            const ChallengeIntermediate1 = require('./core/ChallengeIntermediate1');
            challenge = new ChallengeIntermediate1();
        }
        if (number == 3) {
            const ChallengeDifficult = require('./core/ChallengeDifficult');
            challenge = new ChallengeDifficult();
        }
        challenge.inform();
        await challenge.solve();
    }
}