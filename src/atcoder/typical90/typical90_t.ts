export { };
// main
function main(input: string[]) {
    // param
    let a: bigint, b: bigint, c: bigint;
    [a, b, c] = input.shift().split(" ").map(x => BigInt(x));
    // solve
    let cb = 1n;
    for (let bx = 0; bx < b; bx++) {
        cb *= c;
    }
    let ans = (a < cb) ? "Yes" : "No";
    // answer
    console.log(ans);
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
