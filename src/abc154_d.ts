import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let n, k;
    let pn;
    let ans;
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    pn = input.shift().split(" ").map(x => Number(x));
    // solve
    let sum = 0;
    for (var nx = 0; nx < k; nx++) {
        sum += pn[nx];
    }
    ans = sum;
    for (var nx = 0; nx + k < n; nx++) {
        sum += - pn[nx] + pn[nx + k];
        ans = Math.max(ans, sum);
    }
    ans = (ans + k) / 2;
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
