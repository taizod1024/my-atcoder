export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let t: number;
    let l: number, x: number, y: number;
    let q: number;
    let eq: number[];
    // init
    t = Number(input.shift());
    [l, x, y] = input.shift().split(" ").map(x => Number(x));
    q = Number(input.shift());
    eq = input.map(x => Number(x));
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
