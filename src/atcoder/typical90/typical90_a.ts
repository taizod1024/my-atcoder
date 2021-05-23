export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number, l: number;
    let k: number;
    let an: number[];
    // init
    [n, l] = input.shift().split(" ").map(x => Number(x));
    k = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    let yn: number[] = [];
    yn.push(an[0]);
    for (let nx = 1; nx < n; nx++) yn.push(an[nx] - an[nx - 1]);
    yn.push(l - an[n - 1]);
    ans = 0;
    (function loop(nx: number, rest: number, score: number) {
        // TODO wip RE,TLE 再帰によるネストの深さが原因
        let scr = 0;
        for (let nxx = nx; nxx <= n - rest; nxx++) {
            scr += yn[nxx];
            if (0 < rest) {
                loop(nxx + 1, rest - 1, Math.min(score, scr));
            }
        }
        if (rest == 0) {
            ans = Math.max(ans, Math.min(score, scr));
        }
    })(0, k, l);
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
