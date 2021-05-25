export { };
// main
function main(input: string[]) {
    // param
    let a: bigint, b: bigint;
    [a, b] = input.shift().split(" ").map(x => BigInt(x));
    // solve
    function Math_lcm(...values: bigint[]): bigint {
        let a = values
        let g = (n: bigint, m: bigint): bigint => m ? g(m, n % m) : n;
        let l = (n: bigint, m: bigint): bigint => n * m / g(n, m);
        let ans = a[0]
        for (let i = 1; i < a.length; i++) {
            ans = l(ans, a[i])
        }
        return ans;
    }
    let lcm = Math_lcm(a, b);
    // answer
    let ans: string;
    if (lcm <= Math.pow(10, 18)) {
        ans = lcm.toString().replace("n", "");
    } else {
        ans = "Large";
    }
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
