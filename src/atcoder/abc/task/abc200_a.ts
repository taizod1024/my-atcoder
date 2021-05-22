export { };
// main
function main(input: string[]): number {
    // param
    let ans: number;
    let n: number;
    n = Number(input.shift());
    // solve
    ans = Math.floor((n + 99) / 100);
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
