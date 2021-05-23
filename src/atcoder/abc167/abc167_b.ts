export {};
// main
function main(input: string[]) {
    // param
    let a: number = 0;
    let b: number = 0;
    let c: number = 0;
    let k: number = 0;
    let ans: number = 0;
    // init
    [a, b, c, k] = input.shift().split(" ").map(x => Number(x));
    // solve
    if (k < a) ans = k;
    else if (k < a + b) ans = a;
    else ans = a - (k - a - b);
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
