export {};
// main
function main(input: string[]) {
    // param
    let n: number;
    let an: number[] = [];
    let q: number;
    let bq: number[] = [];
    let cq: number[] = [];
    let ans: number;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    q = Number(input.shift());
    for (let qx = 0; qx < q; qx++) {
        [bq[qx], cq[qx]] = input[qx].split(" ").map(x => Number(x));
    }
    // solve
    ans = an.reduce((x, y) => x + y);
    let an1 = new Array(100001).fill(0);
    for (let nx = 0; nx < n; nx++) {
        an1[an[nx]]++;
    }
    for (let qx = 0; qx < q; qx++) {
        ans -= bq[qx] * an1[bq[qx]];
        ans += cq[qx] * an1[bq[qx]];
        an1[cq[qx]] += an1[bq[qx]];
        an1[bq[qx]] = 0;
        // answer
        console.log(ans);
    }
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
