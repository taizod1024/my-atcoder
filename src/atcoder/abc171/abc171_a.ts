export {};
// main
function main(input: string[]) {
    // param
    let a: string;
    let ans: string;
    // init
    a = input[0];
    // solve
    ans = (a.match(/[A-Z]/)) ? "A" : "a";
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
