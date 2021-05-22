export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let an, bn;
    // init
    [an, bn] = input.shift().split(" ").map(x => x.split("").map(x => Number(x)));
    // solve
    ans = Math.max(an[0] + an[1] + an[2], bn[0] + bn[1] + bn[2]);
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
