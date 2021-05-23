export {};
// main
function main(input: string[]) {
    // param
    let l: number = 0;
    let ans: number = 0;
    // init
    l = Number(input.shift());
    // solve
    ans = Math.pow(l/3, 3);
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
