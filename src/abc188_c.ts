export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let an;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    let aln = an.slice(0, Math.pow(2, n - 1));
    let arn = an.slice(Math.pow(2, n - 1), Math.pow(2, n));
    let al = aln.reduce((x, y) => Math.max(x, y));
    let ar = arn.reduce((x, y) => Math.max(x, y));
    ans = an.indexOf((al < ar) ? al : ar) + 1;
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
