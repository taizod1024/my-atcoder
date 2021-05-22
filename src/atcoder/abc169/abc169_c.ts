export {};
// main
function main(input: string[]) {
    // param
    let a: number = 0;
    let b: number = 0;
    let ans: string = "";
    // init
    [a, b] = input.shift().split(" ").map(x => Number(x));
    // solve
    let c: bigint = BigInt(a) * BigInt(Math.round(b * 100)) / 100n;
    ans = c.toString();
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
