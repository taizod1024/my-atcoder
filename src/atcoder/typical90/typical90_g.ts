export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number;
    let an: number[];
    let q: number;
    let bq: number[][];
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    q = Number(input.shift());
    bq = input.map((val, idx) => [Number(val), idx, 0]);
    // solve
    ans = 0;
    an.sort((a1, a2) => a1 - a2);
    bq.sort((b1, b2) => b1[0] - b2[0]);
    for (let nx = 0, qx = 0; qx < q; qx++) {
        while (nx <= n - 1 && ((an[nx] + an[nx + 1]) / 2 <= bq[qx][0])) nx++;
        bq[qx][2] = Math.abs(bq[qx][0] - an[nx]);
    }
    bq.sort((b1, b2) => b1[1] - b2[1]);
    // answer
    for (let qx = 0; qx < q; qx++) {
        console.log(bq[qx][2]);
    }
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; main(input); });
}
entrypoint();
