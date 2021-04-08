// main
function main(input: string[]) {
    // param
    var n: number;
    var ans: number;
    // init
    n = Number(input[0]);
    // solve
    ans = 1000 - (n - 1) % 1000 - 1;
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
