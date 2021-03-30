import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let sn;
    // init
    sn = input.shift().split("");
    // solve
    ans = (sn[0] == sn[1] && sn[1] == sn[2]) ? "Won" : "Lost";
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
