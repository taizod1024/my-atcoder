export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let x: bigint;
    let y: bigint;
    let a: bigint;
    let b: bigint;
    // init
    let exp: bigint = 0n;
    let input0 = input.shift().split(" ");
    x = BigInt(input0.shift());
    y = BigInt(input0.shift());
    a = BigInt(input0.shift());
    b = BigInt(input0.shift());
    // solve
    while (x * a < y || x + b < y) {
        if (x * (a - 1n) < b) {
            x *= a;
            exp++;
        } else {
            let t = BigInt((y - 1n - x) / b);
            x += b + t;
            exp += t;
            break;
        }
    }
    // while (x * (a - 1n) < b) {
    //     x *= a;
    //     exp++;
    // }
    // exp += BigInt((y - 1n - x) / b);
    ans = exp.toString().replace("n", "");
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
