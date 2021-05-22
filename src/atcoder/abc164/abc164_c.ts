export {};
// main
function main(input: string[]) {
    // param
    let n: number = 0;
    let sn: string[] = [];
    let ans: number = 0;
    // init
    n = Number(input.shift());
    sn = input;
    // solve
    ans = Array.from(new Set(sn)).length;
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
