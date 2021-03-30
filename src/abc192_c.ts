import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n, k;
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    // solve
    function g1(x: number) {
        return Number(x.toString().split("").sort().reverse().join("").replace(/^0+/, ""));
    }
    function g2(x: number) {
        return Number(x.toString().split("").sort().join("").replace(/^0+/, ""));
    }
    function f(x: number) {
        return g1(x) - g2(x);
    }
    let a = n;
    for (let kx = 0; kx < k; kx++) {
        a = f(a);
    }
    ans = a;
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
