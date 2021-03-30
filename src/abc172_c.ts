import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number;
    var m: number;
    var k: number;
    var an: number[];
    var bm: number[];
    var ans: number;
    // init
    [n, m, k] = input.shift().split(" ").map(x => Number(x));
    an = input.shift().split(" ").map(x => Number(x));
    bm = input.shift().split(" ").map(x => Number(x));
    ans = 0;
    // solve
    var anx = 0;
    var bmx = 0;
    var k0 = 0;
    while (anx < an.length) {
        if (k < k0 + an[anx]) break;
        k0 += an[anx];
        anx++;
        ans = Math.max(ans, anx + bmx);
    }
    while (true) {
        while (bmx < bm.length) {
            if (k < k0 + bm[bmx]) break;
            k0 += bm[bmx];
            bmx++;
            ans = Math.max(ans, anx + bmx);
        }
        if (anx <= 0) break;
        anx--;
        k0 -= an[anx];
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
