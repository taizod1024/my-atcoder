export {};
// main
function main(input: string[]) {
    // param
    let n: bigint = 0n;
    let a: bigint = 0n;
    let b: bigint = 0n;
    let ans: string = "";
    // init
    [n, a, b] = input.shift().split(" ").map(x => BigInt(x));
    // solve
    let s = n % (a + b);
    let t = (n - s) / (a + b);
    let u = (a < s) ? a : s;
    ans = String(a * t + u).replace("n", "");
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
