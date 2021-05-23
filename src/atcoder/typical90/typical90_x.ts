export { };
// main
function main(input: string[]) {
    // param
    let n: number, k: number;
    let an: number[];
    let bn: number[];
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    an = input.shift().split(" ").map(x => Number(x));
    bn = input.shift().split(" ").map(x => Number(x));
    // solve
    let df = 0;
    for (let nx = 0; nx < n; nx++) {
        df += Math.abs(an[nx] - bn[nx]);
    }
    // answer
    let ans = (k < df) ? "No" : ((k - df) % 2 != 0) ? "No" : "Yes";
    console.log(ans);
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
