const Challenge = require('./Challenge');

class ChallengeIntermediate1 extends Challenge {

    constructor() {
        super(1, "intermediate");
    }

    async solve() {
        const readLineSync = require('readline-sync')

        const Schedule = require('../lib/schedule');
        const schedule = new Schedule();
        const Event = require('../lib/event');        

        let input;
        while (input !== '0') {
            console.log("0) exit")
            console.log("1) add")
            console.log("2) delete")
            console.log("3) edit")
            input = readLineSync.question("Pick an option: ");
            if (input === '1') {
                let title = readLineSync.question("Enter an event name: ");
                let hour = readLineSync.question("Enter an event hour: ");

                let event = new Event(title);
                schedule.add(event, hour);
            } else if (input === '2') {
                let hour = readLineSync.question("Enter an event hour: ");
                schedule.delete(hour);
            } else if (input === '3') {
                let hour = readLineSync.question("Enter an event hour: ");
                let event = schedule.get(hour);
                if (event) {
                    let title = readLineSync.question(`Enter a new title for event ${event.title}: `);
                    event.title = title;
                } else {
                    console.log(`Event at hour ${hour} does not exist`);
                }
            }
        }
    }
}

module.exports = ChallengeIntermediate1