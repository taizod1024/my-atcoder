export {};
// main
function main(input: string[]) {
    // param
    let n: bigint;
    let ans: string;
    // init
    n = BigInt(input[0]);
    // solve
    let w: bigint = n;
    ans = "";
    while (w != 0n) {
        let m = (w - 1n) % 26n + 1n;
        w = (w - m) / 26n;
        let x = Number(m);
        ans = String.fromCharCode("a".charCodeAt(0) + x - 1) + ans;
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
