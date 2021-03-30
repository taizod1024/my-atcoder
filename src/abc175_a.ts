import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var s: string[];
    var ans: number;
    // init
    s = input.shift().split("");
    // solve
    if (s[0] == "R" && s[1] == "R" && s[2] == "R") {
        ans = 3;
    } else if (s[0] == "R" && s[1] == "R") {
        ans = 2;
    } else if (s[1] == "R" && s[2] == "R") {
        ans = 2;
    } else if (s[0] == "R" || s[1] == "R" || s[2] == "R") {
        ans = 1;
    } else {
        ans = 0;
    }
    // answer
    return ans;
}
// entrypoint
function entrypoint() {
    try {
        // linux
        let input = fs.readFileSync('/dev/stdin', 'utf8').trim().split("\n");
        console.debug = function () { };
        console.log(main(input));
    }
    catch (ex) {
        // windows
        const lines: string[] = [];
        const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
        reader.on('line', function (line: string) { lines.push(line); });
        reader.on('close', function () { let input = lines; console.log(main(input)); });
    }
}
entrypoint();
