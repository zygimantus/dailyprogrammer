const readline = require('readline');
const challenges = require('./challenges');

const NO_OF_CHALLENGES = 3;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (str) => new Promise(resolve => rl.question(str, resolve));

(async () => {
    const number = await question(`Please enter a number of a challenge from 1 to ${NO_OF_CHALLENGES}: `);
    const type = await question(`Please enter a type of difficulty [1,2,3]: `);
    // TODO validate input
    rl.close();
    await challenges.solve_challenge(number, type);
})();