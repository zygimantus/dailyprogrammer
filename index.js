const readline = require('readline');
const challenges = require('./challenges');

const NO_OF_CHALLENGES = 1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (str) => new Promise(resolve => rl.question(str, resolve));

(async () => {
    const iNumber = await question(`Select a challenge to do? Please type a number from 1 to ${NO_OF_CHALLENGES}: `);
    // TODO validate input
    rl.close();
    await challenges.solve_challenge(iNumber);
})();