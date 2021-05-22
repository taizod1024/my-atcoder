export {};
// main
function main(input: string[]) {
    // param
    var n: number = 0;
    var ans: string = "";
    // init
    n = Number(input.shift());
    // solve
    ans = (String(n).match(/7/)) ? "Yes" : "No";
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
