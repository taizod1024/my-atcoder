export {};
// main
function main(input: string[]) {
    // param
    let n: number;
    let m: number;
    let k: number;
    let an: number[];
    let bm: number[];
    let ans: number;
    // init
    [n, m, k] = input.shift().split(" ").map(x => Number(x));
    an = input.shift().split(" ").map(x => Number(x));
    bm = input.shift().split(" ").map(x => Number(x));
    ans = 0;
    // solve
    let anx = 0;
    let bmx = 0;
    let k0 = 0;
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
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; main(input); });
}
entrypoint();
