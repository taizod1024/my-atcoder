export { };
// main
function main(input: string[]) {
    // param
    let ans;
    let a, b, c;
    [a, b, c] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = (a * a + b * b < c * c) ? "Yes" : "No";
    // answer
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
