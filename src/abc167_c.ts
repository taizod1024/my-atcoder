// main
function main(input: string[]) {
    // param
    let n: number, m: number, x: number;
    let cn: number[], anm: number[][];
    let ans: number;
    // init
    [n, m, x] = input.shift().split(" ").map(x => Number(x));
    [cn, anm] = [new Array(n), new Array(n)];
    for (let nx = 0; nx < n; nx++) {
        anm[nx] = input.shift().split(" ").map(x => Number(x));
        cn[nx] = anm[nx].shift();
    }
    // solve
    ans = Number.MAX_SAFE_INTEGER;
    let csn = new Array(n).fill(0);
    function solve(snx: number) {
        if (snx != n) {
            csn[snx] = 0; solve(snx + 1);
            csn[snx] = 1; solve(snx + 1);
        } else {
            let am = new Array(m).fill(0);
            let c = 0;
            for (let nx = 0; nx < n; nx ++) {
                if (csn[nx] == 0) continue;
                for (let mx = 0; mx < m; mx ++) {
                    am[mx] += anm[nx][mx];
                }
                c += cn[nx];
            }
            if (am.filter(a => x <= a).length == m) ans = Math.min(ans, c);
        }
    }
    solve(0);
    if (ans == Number.MAX_SAFE_INTEGER) ans = -1;
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
