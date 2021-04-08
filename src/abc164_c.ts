// main
function main(input: string[]) {
    // param
    var n: number = 0;
    var sn: string[] = [];
    var ans: number = 0;
    // init
    n = Number(input.shift());
    sn = input;
    // solve
    ans = Array.from(new Set(sn)).length;
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
