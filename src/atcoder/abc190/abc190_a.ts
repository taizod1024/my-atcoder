export { };
// main
function main(input: string[]) {
    // param
    let ans;
    let a, b, c;
    // init
    [a, b, c] = input.shift().split(" ").map(x => Number(x));
    // solve
    if (c == 0) {
        ans = (a > b) ? "Takahashi" : "Aoki";
    } else {
        ans = (a < b) ? "Aoki" : "Takahashi";
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
