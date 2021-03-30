import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var x: number;
    var y: number;
    var ans: string;
    // init
    [x, y] = input.shift().split(" ").map(x => Number(x));
    // solve
    var n = (x * 4 - y) / 2;
    if (n != Math.ceil(n)) {
        ans = "No";
    } else if (n < 0) {
        ans = "No";
    } else if (x - n < 0) {
        ans = "No";
    } else {
        ans = "Yes"
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
