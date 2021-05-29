import { join } from "path";

export { };
// main
function main(input: string[]) {
    // param
    let n: number;
    let anm: number[][];
    // init
    n = Number(input[0]);
    anm = input.slice(1).map(x => x.split(" ").map(x => Number(x)));
    // solve
    let ans = 1;
    for (let nx = 0; nx < n; nx++) {
        ans = (ans * anm[nx].reduce((prev, curr) => prev + curr)) % 1000000007;
    }
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
