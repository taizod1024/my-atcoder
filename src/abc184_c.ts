import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let r1, c1;
    let r2, c2;
    // init
    [r1, c1] = input.shift().split(" ").map(x => Number(x));
    [r2, c2] = input.shift().split(" ").map(x => Number(x));
    // solve
    let r0 = Math.abs(r2 - r1);
    let c0 = Math.abs(c2 - c1);
    let d0 = Math.abs(r0 - c0);
    if (r0 == 0 && c0 == 0) {
        ans = 0;    // 0 step: same location
    } else if (r0 == c0) {
        ans = 1;    // 1 step: diagonal 
    } else if (r0 + c0 <= 3) {
        ans = 1;    // 1 step: neighbor
    } else if ((r0 + c0) % 2 == 0) {
        ans = 2;    // 2 step: diagonal + diagonal
    } else if (r0 + c0 <= 6) {
        ans = 2;    // 2 step: neighbor + neighbor
    } else if (d0 <= 3) {
        ans = 2;    // 2 step: diagonal + neighbor | neighbor + diagonal
    } else {
        ans = 3;    // 3 step: others
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
