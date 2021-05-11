export {};
// main
function main(input: string[]) {
    // param
    let a: bigint = 0n;
    let b: bigint = 0n;
    let c: bigint = 0n;
    let d: bigint = 0n;
    let ans: string = "";
    // init
    [a, b, c, d] = input.shift().split(" ").map(x => BigInt(x));
    // solve
    let val: bigint = a * c;
    if (val < a * d) val = a * d;
    if (val < b * c) val = b * c;
    if (val < b * d) val = b * d;
    ans = String(val).replace("n", "");
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
