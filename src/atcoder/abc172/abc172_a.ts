export {};
// main
function main(input: string[]) {
    // param
    let a: number;
    let ans: number;
    // init
    a = Number(input[0]);
    // solve
    ans = a + a * a + a * a * a;
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
