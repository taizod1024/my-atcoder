export {};
// main
function main(input: string[]) {
    // param
    let x: bigint = 0n;
    let ans: number = 0;
    // init
    x = BigInt(input.shift());
    // solve
    ans = 0;
    let val = 100n;
    while (val < x) {
        val *= 101n;
        val /= 100n;
        ans++;
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
