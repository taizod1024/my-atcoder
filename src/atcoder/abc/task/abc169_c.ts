export {};
// main
function main(input: string[]) {
    // param
    var a: number = 0;
    var b: number = 0;
    var ans: string = "";
    // init
    [a, b] = input.shift().split(" ").map(x => Number(x));
    // solve
    var c: bigint = BigInt(a) * BigInt(Math.round(b * 100)) / 100n;
    ans = c.toString();
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
