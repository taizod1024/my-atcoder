export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    // init
    n = Number(input.shift());
    // solve
    ans = 0;
    for (let nx = 5; nx >= 1; nx--) {
        let m = Math.pow(10, 3 * nx);
        if (n >= m) {
            ans += (n - m + 1) * nx;
            n = m - 1;
        }
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
