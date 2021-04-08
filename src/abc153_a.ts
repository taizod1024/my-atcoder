// main
function main(input: string[]) {
    // param
    let h, a;
    let ans;
    // init
    [h, a] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = Math.floor((h - 1) / a) + 1;
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
