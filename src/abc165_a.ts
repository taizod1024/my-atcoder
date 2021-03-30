import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var k: number = 0;
    var a: number = 0;
    var b: number = 0;
    var ans: string = "";
    // init
    k = Number(input.shift());
    [a, b] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = "NG";
    for (var kx = 0; kx <= 1000; kx += k) {
        if (a <= kx && kx <= b) {
            ans = "OK";
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
