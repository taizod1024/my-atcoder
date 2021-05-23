export {};
// main
function main(input: string[]) {
    // param
    let n: number = 0;
    let ans: number = 0;
    // init
    n = Number(input.shift());
    // solve
    let a0 = 1;
    let an = 8;
    let a9 = 1;
    let a09 = 0;
    for (let nx = 1; nx < n; nx++) {
        let bn = an * 8;
        let b0 = a0 * 9 + an * 1;
        let b9 = a9 * 9 + an * 1;
        let b09 = a09 * 10 + a0 * 1 + a9 * 1;
        an = bn % 1000000007;
        a0 = b0 % 1000000007;
        a9 = b9 % 1000000007;
        a09 = b09 % 1000000007;
    }
    ans = Number(a09);
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
