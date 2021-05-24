export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number;
    let am: number[];
    // init
    n = Number(input.shift());
    am = input.shift().split(" ").map(x => Number(x));
    // solve
    am.sort((a1, a2) => -(a1 - a2));
    // TODO wip
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
