export { };
// main
function main(input: string[]) {
    // param
    let n: number, l: number;
    // init
    [n, l] = input.shift().split(" ").map(x => Number(x));
    // solve
    let nn = [1];
    for (let nx = 1; nx <= n; nx++) {
        nn.push((nn[nx - 1] + ((l <= nx) ? nn[nx - l] : 0)) % 1000000007);
    }
    // answer
    console.log(nn[n]);
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
