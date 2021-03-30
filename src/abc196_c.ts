import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    // init
    n = Number(input.shift());
    // solve
    let l = String(n).length;
    if (l % 2 != 0) {
        n = Math.pow(10, l) - 1;
        l--;
    }
    let n1 = Number(String(n).substring(0, l / 2));
    let n2 = Number(String(n).substring(l / 2));
    if (n1 <= n2) {
        ans = n1;
    } else {
        ans = n1 - 1;
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
