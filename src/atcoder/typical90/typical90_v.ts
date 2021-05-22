export { };
// main
function main(input: string[]) {
    // param
    let ans: bigint;
    let a: bigint, b: bigint, c: bigint;
    [a, b, c] = input.shift().split(" ").map(x => BigInt(x));
    // solve
    // TODO wip
    // answer
    console.log(ans.toString().replace("n", ""));
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; main(input); });
}
entrypoint();
