export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number, k: number;
    let an: number[], bn: number[];
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    [an, bn] = [new Array(n), new Array(n)];
    for (let nx = 0; nx < n; nx++) {
        [an[nx], bn[nx]] = input[nx].split(" ").map(x => Number(x));
    }
    // solve
    let cn = an.map((val, nx) => an[nx] - bn[nx]);
    let dn = bn.concat(cn);
    ans = dn.sort((d1, d2) => -(d1 - d2)).slice(0, k).reduce((prev, cur) => prev + cur);
    // answer
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
