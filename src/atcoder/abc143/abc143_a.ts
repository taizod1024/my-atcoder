export {};
// main
function main(input: string[]) {
    // param
    var a: number;
    var b: number;
    var ans;
    // init
    [a, b] = input[0].split(" ").map(x => Number(x));
    // solve
    var wrk = a - b * 2;
    ans = (wrk > 0) ? wrk : 0;
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; main(input); });
}
entrypoint();
