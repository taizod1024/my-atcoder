export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let an;
    // init
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    an.sort((x, y) => x - y);
    ans = an[0];
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
