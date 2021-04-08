export {};
// main
function main(input: string[]) {
    // param
    var r: number = 0;
    var ans: number = 0;
    // init
    r = Number(input.shift());
    // solve
    ans = 2 * Math.PI * r;
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
