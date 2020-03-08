class Challenge {

    constructor(number, difficulty) {
        this.number = number;
        this.difficulty = difficulty;
    }

    inform() {
        console.log(`You are doing challenge #${this.number} of difficulty [${this.difficulty}]`);
    }

    solve() {
        throw new Error('You have to implement the method solve!');
    }
}

module.exports = Challenge