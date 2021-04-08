export {};
// main
function main(input: string[]) {
    // param
    let n;
    let xn;
    let ans;
    // init
    n = Number(input.shift());
    xn = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = Number.MAX_SAFE_INTEGER;
    for (var px = 1; px <= 100; px++) {
        let w = 0;
        for (var nx = 0; nx < n; nx++) {
            w += (xn[nx] - px) * (xn[nx] - px);
        }
        ans = Math.min(ans, w);
    }
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
