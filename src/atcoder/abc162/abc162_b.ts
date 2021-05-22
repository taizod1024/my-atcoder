export {};
// main
function main(input: string[]) {
    // param
    let n: number = 0;
    let ans: number = 0;
    // init
    n = Number(input.shift());
    // solve
    for (let nx = 1; nx <= n; nx++) {
        if (nx % 3 == 0) continue;
        if (nx % 5 == 0) continue;
        ans += nx;
    }
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
