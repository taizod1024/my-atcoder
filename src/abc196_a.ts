export {};
// main
function main(input: string[]) {
    // param
    let ans;
    // init
    let a, b;
    let c, d;
    [a, b] = input.shift().split(" ").map(x => Number(x));
    [c, d] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = Math.max(a - c, a - d, b - c, b - d);
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
