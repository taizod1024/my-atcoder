import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n,  x;
    let sn;
    // init
    [n, x] = input.shift().split(" ").map(x => Number(x));
    sn = input.shift().split("");
    // solve
    for (var nx = 0; nx < n; nx ++) {
        if (sn[nx] == "o") {
            x += 1;
        } else if (0 < x) {
            x -= 1;
        }
    }
    ans = x;
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
