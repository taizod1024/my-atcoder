// main
function main(input: string[]) {
    // param
    let ans;
    let n, m, t;
    let am, bm;
    // init
    [n, m, t] = input.shift().split(" ").map(x => Number(x));
    [am, bm] = [new Array(n), new Array(n)];
    for (let mx = 0; mx < m; mx++) {
        [am[mx], bm[mx]] = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    ans = "Yes";
    let n0 = n;
    let t0 = 0;
    for (let mx = 0; mx < m; mx++) {
        n0 -= am[mx] - t0;
        if (n0 <= 0) {
            ans = "No";
            break;
        }
        t0 = am[mx];
        n0 += bm[mx] - t0;
        if (n < n0) {
            n0 = n;
        }
        t0 = bm[mx];
    }
    if (ans == "Yes") {
        n0 -= t - t0;
        if (n0 <= 0) {
            ans = "No";
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
