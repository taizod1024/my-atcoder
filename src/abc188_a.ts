export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let x, y;
    // init
    [x, y] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = ((x < y && x + 3 > y) || (x > y && x < y + 3)) ? "Yes" : "No";
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
