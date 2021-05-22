export {};
// main
function main(input: string[]) {
    // param
    let x: number;
    let k: number;
    let d: number;
    let ans: number;
    // init
    [x, k, d] = input.shift().split(" ").map(x => Number(x));
    // solve
    x = Math.abs(x);
    if (k < x / d) {
        ans = x - d * k;
    } else {
        let m = x % d;
        let n = (x - m) / d;
        if (k % 2 == n % 2) {
            ans = m;
        } else {
            ans = d - m;
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
