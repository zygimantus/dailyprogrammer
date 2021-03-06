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
                const ChallengeHard1 = require('./core/ChallengeHard1');
                challenge = new ChallengeHard1();
            }
        }
        if (number == 2) {
            if (type == 1) {
                const ChallengeEasy2 = require('./core/ChallengeEasy2');
                challenge = new ChallengeEasy2();
            }
            if (type == 2) {
                const ChallengeIntermediate2 = require('./core/ChallengeIntermediate2');
                challenge = new ChallengeIntermediate2();
            }
            if (type == 3) {
                const ChallengeHard2 = require('./core/ChallengeHard2');
                challenge = new ChallengeHard2();
            }
        }
        if (number == 3) {
            if (type == 1) {
                const ChallengeEasy3 = require('./core/ChallengeEasy3');
                challenge = new ChallengeEasy3();
            }
            if (type == 2) {
                const ChallengeIntermediate3 = require('./core/ChallengeIntermediate3');
                challenge = new ChallengeIntermediate3();
            }
            if (type == 3) {
                const ChallengeHard3 = require('./core/ChallengeHard3');
                challenge = new ChallengeHard3();
            }
        }
        if (number == 4) {
            if (type == 1) {
                const ChallengeEasy4 = require('./core/ChallengeEasy4');
                challenge = new ChallengeEasy4();
            }
            if (type == 2) {
                const ChallengeIntermediate4 = require('./core/ChallengeIntermediate4');
                challenge = new ChallengeIntermediate4();
            }
            if (type == 3) {
                const ChallengeHard4 = require('./core/ChallengeHard4');
                challenge = new ChallengeHard4();
            }
        }
        if (number == 5) {
            if (type == 1) {
                const ChallengeEasy5 = require('./core/ChallengeEasy5');
                challenge = new ChallengeEasy5();
            }
            if (type == 2) {
                const ChallengeIntermediate5 = require('./core/ChallengeIntermediate5');
                challenge = new ChallengeIntermediate5();
            }
        }
        challenge.inform();
        await challenge.solve();
    }
}