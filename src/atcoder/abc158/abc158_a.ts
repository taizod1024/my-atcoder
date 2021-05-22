export {};
// main
function main(input: string[]) {
    // param
    let s: string = "";
    let ans: string = "";
    // init
    s = input.shift();
    // solve
    ans = (s == "AAA" || s == "BBB") ? "No" : "Yes";
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
