module.exports = {

    // TODO make a class for a challenge when there are more of them
    async solve_challenge(iNumber) {

        if (iNumber == 1) {

            const challenge_1 = require('./lib/challenge_1');
            await challenge_1.run();
        }
    }
}