export {};
// main
function main(input: string[]) {
    // param
    let h, n;
    let an;
    let ans;
    // init
    [h, n] = input.shift().split(" ").map(x => Number(x));
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    if (h - an.reduce((x, y) => x + y) <= 0) {
        ans = "Yes"
    } else {
        ans = "No";
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
