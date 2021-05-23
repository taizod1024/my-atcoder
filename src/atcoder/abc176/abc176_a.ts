export {};
// main
function main(input: string[]) {
    // param
    let n: number;
    let x: number;
    let t: number;
    let ans: number;
    // init
    [n, x, t] = input[0].split(" ").map(x => Number(x));
    // solve
    let ans = Math.ceil(n / x) * t;
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
