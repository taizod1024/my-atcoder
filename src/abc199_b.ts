export { };
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let an;
    let bn;
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    bn = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = Math.max(0, Math.min(...bn) - Math.max(...an) + 1);
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
