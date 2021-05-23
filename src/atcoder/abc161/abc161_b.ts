export {};
// main
function main(input: string[]) {
    // param
    let n: number = 0;
    let m: number = 0;
    let an: number[] = [];
    let ans: string = "";
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    an.sort((x, y) => y - x);
    let sum = an.reduce((x, y) => x + y);
    let min = sum / (4 * m);
    ans = "Yes";
    for (let nx = 0; nx < m; nx++) {
        if (an[nx] < min) {
            ans = "No"
            break;
        }
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
