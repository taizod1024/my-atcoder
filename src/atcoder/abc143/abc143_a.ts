export {};
// main
function main(input: string[]) {
    // param
    let a: number;
    let b: number;
    let ans;
    // init
    [a, b] = input[0].split(" ").map(x => Number(x));
    // solve
    let wrk = a - b * 2;
    ans = (wrk > 0) ? wrk : 0;
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
