export {};
// main
function main(input: string[]) {
    // param
    let x: number;
    let ans: string;
    // init
    x = Number(input[0]);
    // solve
    if (30 <= x)
        ans = "Yes"
    else
        ans = "No";
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
