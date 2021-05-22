export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n, m;
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = (n == m) ? "Yes" : "No";
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
