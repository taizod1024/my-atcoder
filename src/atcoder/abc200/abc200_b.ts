export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number, k: number;
    [n, k] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = n;
    for (let kx = 0; kx < k; kx++) {
        if (ans % 200 == 0) {
            ans = ans / 200;
        } else {
            ans = ans * 1000 + 200;
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
