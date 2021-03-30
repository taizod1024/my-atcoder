import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    // init
    n = Number(input.shift());
    ans = new Array();
    // solve
    let nsqrt = Number(Math.sqrt(n));
    for (var i = 0; i < nsqrt; i++) {
        if (n % i == 0) {
            ans.push(i);
            ans.push(n / i);
        }
    }
    if (n % nsqrt == 0) ans.push(nsqrt);
    ans.sort((a, b) => a - b);
    // answer
    ans.forEach(x => console.log(x));
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
