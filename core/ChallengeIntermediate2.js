const Challenge = require('./Challenge');

class ChallengeIntermediate2 extends Challenge {

    constructor() {
        super(2, "intermediate");
    }

    async solve() {
        const readLineSync = require('readline-sync');

        const fs = require('fs');
        let rows = fs.readFileSync(`resources/map.txt`).toString().split("\n");
        let coords = [];
        let length = rows.length;
        let start_x, start_y;
        for (let index = 0; index < length; index++) {
            let elements = rows[index].toString().split(";");
            for (let j = 0; j < elements.length; j++) {
                let element = elements[j];
                // coords[index, j] = element;
                coords.push({ x: j, y: index, value: element });
                if (element == 'S') {
                    start_x = j;
                    start_y = index;
                }
            }
        }
        let position_x = start_x;
        let position_y = start_y;

        let name = readLineSync.question("What is your name? ");
        console.log(`Welcome, ${name}, you are playing an escape game`);

        let play = true;
        let input;

        while (play) {
            console.log(`You are in a position: ${position_x}:${position_y}`);
            input = readLineSync.question(`Which action you want to do [l,n,s,w,e,i]? `);
            if (input === 'l') {
                var obj = coords.find(o => o.x == position_x && o.y == position_y);
                if (obj.value == 'S') {
                    console.log(`You are in a starting position.`);
                }
            } else if (input === 'n') {
                position_y--;
            } else if (input === 's') {
                position_y++;
            } else if (input === 'w') {
                position_x++;
            } else if (input === 'e') {
                position_x--;
            } else if (input === 'i') {
                // TODO inventory functionality
                console.log("Your inventory is empty");
            }
            // check if nswe position is allowed and change it, also check if E is reached
            if (0 > position_y || position_y >= length) {
                console.log("You cannot go here")
                if (input == 'n')
                    position_y++;
                else
                    position_y--;
            }
            if (0 > position_x || position_x >= length) {
                console.log("You cannot go here")
                if (input == 'e')
                    position_x++;
                else
                    position_x--;
            }
            var obj = coords.find(o => o.x == position_x && o.y == position_y);
            if (obj.value == 'E') {
                console.log("You reached the END!");
                play = false;
            }
        }
    }
}

module.exports = ChallengeIntermediate2