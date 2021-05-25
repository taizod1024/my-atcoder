export { };
// main
function main(input: string[]) {
    // param
    let n: number;
    let an: number[], bn: number[];
    // init
    n = Number(input.shift());
    [an, bn] = [new Array(n), new Array(n)];
    for (let nx = 0; nx < n; nx++) {
        [an[nx], bn[nx]] = input[nx].split(" ").map(x => Number(x));
    }
    // solve
    // answer
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
