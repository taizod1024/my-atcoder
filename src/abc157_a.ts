export {};
// main
function main(input: string[]) {
    // param
    let n: number = 0;
    let ans: number = 0;
    // init
    n = Number(input.shift());
    // solve
    ans = Math.floor((n + 1) / 2);
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
