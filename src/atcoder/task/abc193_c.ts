export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    // init
    n = Number(input.shift());
    // solve
    let s = new Set();
    for (let nx = 2; nx * nx <= n; nx++) {
        for (let nxx = nx * nx; nxx <= n; nxx *= nx) {
            s.add(nxx);
        }
    }
    ans = n - Array.from(s).length;
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
