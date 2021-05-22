export {};
// main
function main(input: string[]) {
    // param
    let r: number = 0;
    let ans: number = 0;
    // init
    r = Number(input.shift());
    // solve
    ans = 2 * Math.PI * r;
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
