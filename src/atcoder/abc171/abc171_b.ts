export {};
// main
function main(input: string[]) {
    // param
    let n: number;
    let k: number;
    let pn: number[];
    let ans: number;
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    pn = input.shift().split(" ").map(x => Number(x));
    // solve
    pn.sort(function (a, b) { return a - b; });
    ans = 0;
    for (let pnx = 0; pnx < k; pnx++) {
        ans += pn[pnx];
    }
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
