export {};
// main
var n: number = 0;
var m: number = 0;
var q: number = 0;
var aq: number[] = [];
var bq: number[] = [];
var cq: number[] = [];
var dq: number[] = [];
function main(input: string[]) {
    // param
    var ans: number = 0;
    // init
    [n, m, q] = input.shift().split(" ").map(x => Number(x));
    for (var qx = 0; qx < q; qx++) {
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
    var a = new Array(n + 1).fill(1);
    a[0] = -1;
    var nx = n;
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
    var dsum = 0;
    for (var qx = 0; qx < q; qx++) {
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
