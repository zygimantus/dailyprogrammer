module.exports = {

    // TODO make a class for a challenge when there are more of them
    async solve_challenge(number) {

        if (number == 1) {
            const ChallengeEasy1 = require('./lib/ChallengeEasy1');
            let challenge = new ChallengeEasy1();
            challenge.inform();
            await challenge.solve();
        }
    }
}