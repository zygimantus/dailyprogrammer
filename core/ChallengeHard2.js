const Challenge = require('./Challenge');

class ChallengeDifficult extends Challenge {

    constructor() {
        super(3, "hard");
    }

    async solve() {
        const terminalOverwrite = require('terminal-overwrite');
        let hours = "00";
        let minutes = "00";
        let seconds = "00";
        let time = 0;
        let progress;

        let laps_text = '';
        let information;

        let laps = 0;

        const stdin = process.stdin;
        stdin.setRawMode(true);
        stdin.resume();

        stdin.on('keypress', (str, key) => {
            let key_info;
            if (key.name === 'q') {
                key_info = 'Program stopped.';
                clearInterval(progress);
                process.exit();
            } else if (key.name === 's') {
                key_info = 'Stopwatch started.';
                if (progress === undefined) {
                    progress = setInterval(() => {
                        time++;
                        seconds = time < 10 ? "0" + time : time;
                        terminalOverwrite(`${hours}:${minutes}:${seconds}\n${laps_text}${information}`);
                    }, 1000);
                }
            } else if (key.name === 'f') {
                key_info = 'Stopwatch finished.';
                clearInterval(progress);
                progress = undefined;
            } else if (key.name === 'l') {
                key_info = 'Stopwatch lap activated. Continuing.';
                laps++;
                laps_text = laps_text + `#${laps}\t\t${hours}:${minutes}:${seconds}\n`;
            } else if (key.name === 'w') {
                key_info = 'Stopwatch finished and writing out to file.';

                const output = 'Label\tTime\n' + laps_text + `#Stop\t${hours}:${minutes}:${seconds}`;
                const fs = require('fs');
                fs.writeFileSync('output.txt', output);        
            } else {
                key_info = 'Unknown command, enter [q], [s] or [f].';
            }
            information = (`You pressed the "${str}" key. ` + key_info);
            terminalOverwrite(`${hours}:${minutes}:${seconds}\n${laps_text}${information}`);
        });
    }
}

module.exports = ChallengeDifficult