export {};
// main
function main(input: string[]) {
    // param
    var n: number;
    var ans: number;
    // init
    n = Number(input[0]);
    ans = 0;
    // solve
    var narr = new Array(n + 1).fill(0);
    for (var nx = 1; nx <= n; nx++) {
        for (var nxx = nx; nxx <= n; nxx += nx) {
            narr[nxx] ++;
        }
    }
    for (var nx = 1; nx <= n; nx ++) {
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
