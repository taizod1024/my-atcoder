export {};
// main
function main(input: string[]) {
    // param
    let n: bigint = 0n;
    let k: bigint = 0n;
    let ans: string = "";
    // init
    [n, k] = input.shift().split(" ").map(x => BigInt(x));
    // solve
    let m = n % k;
    ans = String((m < k - m) ? m : k - m).replace("n", "");
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
