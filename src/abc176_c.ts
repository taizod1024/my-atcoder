import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number;
    var an: number[];
    var ans;
    // init
    n = Number(input[0]);
    an = input[1].split(" ").map(x => Number(x));
    // solve
    var b = 0;
    var h = an[0];
    for (var anx = 0; anx < an.length; anx ++) {
        if (h < an[anx]) {
            h = an[anx];
        } else if (h > an[anx]) {
            b += h - an[anx];
        } 
    }
    ans = b;
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
