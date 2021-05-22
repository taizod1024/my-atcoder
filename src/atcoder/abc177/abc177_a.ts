export {};
// main
function main(input: string[]) {
    // param
    let d: number = 0;
    let t: number = 0;
    let s: number = 0;
    let ans: string = "";
    // init
    [d, t, s] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = (d <= s * t) ? "Yes" : "No";
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
