import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let n, q;
    let qq;
    let ans;
    // init
    [n, q] = input.shift().split(" ").map(x => Number(x));
    qq = new Array(q);
    for (let qx = 0; qx < q; qx++) {
        qq[qx] = input[qx].split(" ").map(x => Number(x));
    }
    // solve
    ans = (n - 2) * (n - 2);
    let w = n;
    let h = n;
    let wn = new Array(n + 1).fill(-1); // w cache
    let hn = new Array(n + 1).fill(-1); // h cache
    for (let qx = 0; qx < q;) {
        // 1 x
        for (; qx < q && qq[qx][0] == 1; qx++) {
            // find w min
            if (hn[qq[qx][1]] < 0) {
                w = Math.min(w, qq[qx][1]);
                ans -= h - 2;
            } 
            // from cache
            else {
                ans -= hn[qq[qx][1]];
            }
        }
        // make cache over w
        for (let nx = w; nx <= n && hn[nx] < 0; nx++) {
            hn[nx] = h - 2;
        }
        // 2 x
        for (; qx < q && qq[qx][0] == 2; qx++) {
            // find h min
            if (wn[qq[qx][1]] < 0) {
                h = Math.min(h, qq[qx][1]);
                ans -= w - 2;
            }
            // from cache 
            else {
                ans -= wn[qq[qx][1]];
            }
        }
        // make cache over h
        for (let nx = h; nx <= n && wn[nx] < 0; nx++) {
            wn[nx] = w - 2;
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
