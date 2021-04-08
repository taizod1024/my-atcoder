export {};
// main
function main(input: string[]) {
    // param
    let n, k;
    let hn;
    let ans;
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    hn = input.shift().split(" ").map(x => Number(x));
    // solve
    hn.sort((x, y) => y - x).splice(k);
    ans = (hn.length != 0) ? hn.reduce((x, y) => x + y) : 0;
    // answer
    return ans;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
