export {};
// main
let n: number = 0;
let m: number = 0;
let q: number = 0;
let aq: number[] = [];
let bq: number[] = [];
let cq: number[] = [];
let dq: number[] = [];
function main(input: string[]) {
    // param
    let ans: number = 0;
    // init
    [n, m, q] = input.shift().split(" ").map(x => Number(x));
    for (let qx = 0; qx < q; qx++) {
        [aq[qx], bq[qx], cq[qx], dq[qx]] = input[qx].split(" ").map(x => Number(x));
    }
    // solve
    enumseq(function (a) {
        ans = Math.max(ans, getdsum(a));
    })
    // answer
    console.log(ans);
}
function enumseq(func: ((_: number[]) => void)) {
    let a = new Array(n + 1).fill(1);
    a[0] = -1;
    let nx = n;
    func(a);
    while (0 < nx) {
        if (a[nx] == m) {
            nx--;
        } else {
            a[nx]++;
            while (nx < n) {
                a[nx + 1] = a[nx];
                nx++;
            }
            func(a);
        }
    }
}
function getdsum(a: number[]): number {
    let dsum = 0;
    for (let qx = 0; qx < q; qx++) {
        if (a[bq[qx]] - a[aq[qx]] == cq[qx]) {
            dsum += dq[qx];
        }
    }
    return dsum;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; main(input); });
}
entrypoint();
