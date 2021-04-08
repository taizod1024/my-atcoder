export {};
// main
function main(input: string[]) {
    // param
    var n: number;
    var x: number;
    var t: number;
    var ans: number;
    // init
    [n, x, t] = input[0].split(" ").map(x => Number(x));
    // solve
    var ans = Math.ceil(n / x) * t;
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
