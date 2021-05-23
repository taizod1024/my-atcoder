export {};
// main
function main(input: string[]) {
    // param
    let x: number = 0;
    let ans: number = 0;
    // init
    x = Number(input.shift());
    // solve
    if (x == 0) ans = 1;
    if (x == 1) ans = 0;
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
