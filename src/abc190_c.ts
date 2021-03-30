import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number, m: number;
    let am: number[], bm: number[];
    let k: number;
    let ck: number[], dk: number[];
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    [am, bm] = [new Array(m), new Array(m)];
    for (let mx = 0; mx < m; mx++) {
        [am[mx], bm[mx]] = input.shift().split(" ").map(x => Number(x));
    }
    [k] = input.shift().split(" ").map(x => Number(x));
    [ck, dk] = [new Array(k), new Array(k)];
    for (let kx = 0; kx < k; kx++) {
        [ck[kx], dk[kx]] = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    ans = 0;
    let dn = new Array(n + 1).fill(0);
    (function solve(kx: number) {
        if (kx < k) {
            dn[ck[kx]]++;
            solve(kx + 1);
            dn[ck[kx]]--;
            dn[dk[kx]]++;
            solve(kx + 1);
            dn[dk[kx]]--;
        } else {
            let a0 = 0;
            for (let mx = 0; mx < m; mx++) {
                if (0 < dn[am[mx]] && 0 < dn[bm[mx]]) {
                    a0++;
                }
            }
            ans = Math.max(ans, a0);
        }
    })(0);
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
