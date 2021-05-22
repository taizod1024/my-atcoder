export { };
// main
function main(input: string[]) {
    // param
    let ans;
    let n: number;
    let an: number[];
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    function solve(idx: number, or: number, xor: number): number {
        if (idx + 1 == n) return xor ^ (or | an[idx]);
        let xor1 = solve(idx + 1, or | an[idx], xor);
        let xor2 = solve(idx + 1, 0, xor ^ (or | an[idx]));
        return Math.min(xor1, xor2);
    }
    ans = solve(0, 0, 0);
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
