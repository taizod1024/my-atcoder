export { };
// main
function main(input: string[]) {
    // param
    let n: number;
    let sn: string[];
    // init
    n = Number(input.shift());
    sn = input;
    // solve
    let map = new Map();
    for (let nx = 0; nx < n; nx++) {
        if (!map.has(sn[nx])) {
            console.log(nx + 1);
            map.set(sn[nx], nx);
        }
    }
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; main(input); });
}
entrypoint();
