import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var x: number = 0;
    var ans: number = 0;
    // init
    x = Number(input.shift());
    // solve
    var c500 = Math.floor(x / 500);
    var c5 = Math.floor((x - c500 *500) / 5);
    ans = 1000 * c500 + 5 * c5;
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
