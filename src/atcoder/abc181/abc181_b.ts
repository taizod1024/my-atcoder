export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let an, bn;
    // init
    ans = 0;
    n = Number(input.shift());
    [an, bn] = [new Array(n), new Array(n)];
    for (let nx = 0; nx < n; nx++) {
        [an[nx], bn[nx]] = input[nx].split(" ").map(x => Number(x));
    }
    // solve
    for (let nx = 0; nx < n; nx++) {
        let x = bn[nx] - an[nx] + 1;
        let y = an[nx] * x + (x - 1) * x / 2;
        ans += y;
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
