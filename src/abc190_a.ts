import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let a, b, c;
    // init
    [a, b, c] = input.shift().split(" ").map(x => Number(x));
    // solve
    if (c == 0) {
        ans = (a > b) ? "Takahashi" : "Aoki";
    } else {
        ans = (a < b) ? "Aoki" : "Takahashi";
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
