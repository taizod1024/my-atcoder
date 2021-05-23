export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number;
    let an: number[];
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    let m:number = 200;
    let cm: number[] = new Array(m).fill(0);
    for (let nx = 0; nx < n; nx++) {
        cm[an[nx] % 200]++;
    }
    ans = 0;
    for (let mx = 0; mx < m; mx++) {
        ans += cm[mx] * (cm[mx] - 1) / 2;
    }
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
