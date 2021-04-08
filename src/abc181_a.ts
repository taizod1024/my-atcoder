// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    // init
    n = Number(input.shift());
    // solve
    ans = (n % 2 != 0) ? "Black" : "White";
    // answer
    return ans;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
