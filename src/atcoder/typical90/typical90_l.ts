export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let h: number, w: number;
    let q: number;
    let qn: number[];
    [h, w] = input.shift().split(" ").map(x => Number(x));
    q = Number(input.shift());
    qn = input.map(x => Number(x));
    // solve
    // answer
    console.log(ans);
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
