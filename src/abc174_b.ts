import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number;
    var d: number;
    var xn: number[] = [];
    var yn: number[] = [];
    var ans: number = 0;
    // init
    [n, d] = input.shift().split(" ").map(x => Number(x));
    for (var nx = 0; nx < n; nx++) {
        [xn[nx], yn[nx]] = input[nx].split(" ").map(x => Number(x));
    }
    // solve
    for (var nx = 0; nx < n; nx++) {
        if (xn[nx] * xn[nx] + yn[nx] * yn[nx] <= d * d) {
            ans++;
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
