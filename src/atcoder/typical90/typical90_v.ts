export { };
// main
function main(input: string[]) {
    // param
    let ans: bigint;
    let a: bigint, b: bigint, c: bigint;
    [a, b, c] = input.shift().split(" ").map(x => BigInt(x));
    // solve
    function Math_gcd(...values: bigint[]): bigint {
        let ans = values[0];
        let f = (a: bigint, b: bigint): bigint => b ? f(b, a % b) : a
        for (let i = 1; i < values.length; i++) {
            ans = f(ans, values[i]);
        }
        return ans
    };
    const gcd = Math_gcd(a, b, c);
    ans = (a / gcd - 1n) + (b / gcd - 1n) + (c / gcd - 1n);
    // answer
    console.log(ans.toString().replace("n", ""));
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
