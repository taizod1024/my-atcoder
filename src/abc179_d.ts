// main
function main(input: string[]) {
    // param
    let n, k;
    let lk, rk;
    let ans;
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    lk = new Array(k);
    rk = new Array(k);
    for (let kx = 0; kx < k; kx++) {
        [lk[kx], rk[kx]] = input[kx].split(" ").map(x => Number(x));
    }
    // solve
    let a = 0;
    let an = new Array(n + 1).fill(0);
    let fn = new Array(n + 1).fill(0);
    let modx = function (x: number) {
        let y = x % 998244353;
        if (y < 0) y += 998244353;
        return y;
    };
    for (let nx = 1; nx <= n; nx++) {
        if (nx == 1) {
            a = 0;
            fn[nx] = 1;
        } else {
            a = modx(a + an[nx]);
            fn[nx] = a;
        }
        for (let kx = 0; kx < k; kx++) {
            if (nx + lk[kx] <= n) {
                an[nx + lk[kx]] = modx(an[nx + lk[kx]] + fn[nx]);
            }
            if (nx + rk[kx] + 1 <= n) {
                an[nx + rk[kx] + 1] = modx(an[nx + rk[kx] + 1] - fn[nx]);
            }
        }
    }
    ans = fn[n];
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
