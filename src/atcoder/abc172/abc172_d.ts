export {};
// main
function main(input: string[]) {
    // param
    let n: number;
    let ans: number;
    // init
    n = Number(input[0]);
    ans = 0;
    // solve
    let narr = new Array(n + 1).fill(0);
    for (let nx = 1; nx <= n; nx++) {
        for (let nxx = nx; nxx <= n; nxx += nx) {
            narr[nxx] ++;
        }
    }
    for (let nx = 1; nx <= n; nx ++) {
        ans += nx * narr[nx];
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
