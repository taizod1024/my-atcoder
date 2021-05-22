export {};
// main
function main(input: string[]) {
    // param
    let k: number = 0;
    let n: number = 0;
    let an: number[] = [];
    let ans: number = 0;
    // init
    [k, n] = input.shift().split(" ").map(x => Number(x));
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    let max = 0;
    for (let nx = 0; nx < n; nx++) {
        if (nx < n - 1) {
            max = Math.max(max, an[nx + 1] - an[nx]);
        } else {
            max = Math.max(max, k + an[0] - an[nx]);
        }
    }
    ans = k - max;
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
