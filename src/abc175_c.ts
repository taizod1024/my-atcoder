import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var x: number;
    var k: number;
    var d: number;
    var ans: number;
    // init
    [x, k, d] = input.shift().split(" ").map(x => Number(x));
    // solve
    x = Math.abs(x);
    if (k < x / d) {
        ans = x - d * k;
    } else {
        var m = x % d;
        var n = (x - m) / d;
        if (k % 2 == n % 2) {
            ans = m;
        } else {
            ans = d - m;
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
