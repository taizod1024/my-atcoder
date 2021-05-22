export {};
// main
function main(input: string[]) {
    // param
    let n: number = 0;
    let m: number = 0;
    let hn: number[] = [];
    let am: number[] = [];
    let bm: number[] = [];
    let ans: number = 0;
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    hn = input.shift().split(" ").map(x => Number(x));
    let abm: number[][] = [];
    for (let mx = 0; mx < m; mx++) {
        [am[mx], bm[mx]] = input[mx].split(" ").map(x => Number(x) - 1);
        abm.push([am[mx], bm[mx]]);
    }
    // solve
    let wn = new Array(n).fill(1);
    for (let mx = 0; mx < m; mx++) {
        if (hn[am[mx]] <= hn[bm[mx]]) {
          wn[am[mx]] = 0;
        }
        if (hn[am[mx]] >= hn[bm[mx]]) {
            wn[bm[mx]] = 0;
          }
      }
    console.error(hn);
    console.error(wn);
    console.error(am);
    console.error(bm);
    ans = wn.reduce((x, y) => x + y);
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
