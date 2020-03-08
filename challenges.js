module.exports = {

    async solve_challenge(number, type) {

        let challenge;
        if (number == 1) {
            if (type == 1) {
                const ChallengeEasy1 = require('./core/ChallengeEasy1');
                challenge = new ChallengeEasy1();    
            }
            if (type == 2) {
                const ChallengeIntermediate1 = require('./core/ChallengeIntermediate1');
                challenge = new ChallengeIntermediate1();
                }
            if (type == 3) {
                const ChallengeDifficult = require('./core/ChallengeDifficult');
                challenge = new ChallengeDifficult();
            }
        }
        if (number == 2) {
            if (type == 1) {
                const ChallengeEasy2 = require('./core/ChallengeEasy2');
                challenge = new ChallengeEasy2();    
            }
        }
        challenge.inform();
        await challenge.solve();
    }
}