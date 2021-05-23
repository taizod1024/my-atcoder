export {};
// main
function main(input: string[]) {
    // param
    let x: number;
    let y: number;
    let ans: string;
    // init
    [x, y] = input.shift().split(" ").map(x => Number(x));
    // solve
    let n = (x * 4 - y) / 2;
    if (n != Math.ceil(n)) {
        ans = "No";
    } else if (n < 0) {
        ans = "No";
    } else if (x - n < 0) {
        ans = "No";
    } else {
        ans = "Yes"
    }
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
