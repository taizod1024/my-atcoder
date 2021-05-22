export {};
// main
function main(input: string[]) {
    // param
    var x: number;
    var y: number;
    var ans: string;
    // init
    [x, y] = input.shift().split(" ").map(x => Number(x));
    // solve
    var n = (x * 4 - y) / 2;
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
    reader.on('close', function () { let input = lines; main(input); });
}
entrypoint();
