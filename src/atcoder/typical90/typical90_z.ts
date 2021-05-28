export { };
// main
function main(input: string[]) {
    // param
    let n: number;
    let abn: number[][];
    n = Number(input.shift());
    abn = input.map(x => x.split(" ").map(x => Number(x) - 1));
    // solve
    for (let nx = 0; nx < n - 1; nx++) {
        if (abn[nx][0] > abn[nx][1]) {
            [abn[nx][0], abn[nx][1]] = [abn[nx][1], abn[nx][0]];
        }
    }
    abn.sort((ab1, ab2) => ab1[0] - ab2[0]);
    // TODO wip: 解答中
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
