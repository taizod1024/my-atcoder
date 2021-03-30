import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let a: number = 0;
    let b: number = 0;
    let ans: number = 0;
    // init
    [a, b] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = -1;
    for (var rx = 0; rx <= 1010; rx++) {
        if (Math.floor(rx * 0.08) == a &&
            Math.floor(rx * 0.10) == b) {
            ans = rx;
            break;
        }
    }
    // answer
    return ans;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
