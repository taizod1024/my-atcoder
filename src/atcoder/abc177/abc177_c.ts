export {};
// main
function main(input: string[]) {
    // param
    let n: number;
    let an: bigint[];
    let ans;
    // init
    n = +input[0];
    an = input[1].split(" ").map(x => BigInt(x));
    let m: bigint = BigInt(Math.pow(10, 9) + 7);
    // solve
    let p: bigint = 0n;
    let s: bigint = 0n;
    for (let i = 0; i < an.length; i++) {
        p = (p + an[i] * s) % m;
        s = (s + an[i]) % m;
    }
    ans = Number(p);
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
