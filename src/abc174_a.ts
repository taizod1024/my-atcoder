import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var x: number;
    var ans: string;
    // init
    x = Number(input[0]);
    // solve
    if (30 <= x)
        ans = "Yes"
    else
        ans = "No";
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
