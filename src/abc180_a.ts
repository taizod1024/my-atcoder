import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n, a, b;
    // init
    [n, a, b] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = n - a + b;
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
