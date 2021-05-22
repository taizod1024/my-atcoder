
export {};
// main
function main(input: string[]) {
    // param
    var n: number = 0;
    var m: number = 0;
    var ans: number = 0;
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = n * (n - 1) / 2 + m * (m - 1) / 2
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