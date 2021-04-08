// main
function main(input: string[]) {
    // param
    var a: number;
    var ans: number;
    // init
    a = Number(input[0]);
    // solve
    ans = a + a * a + a * a * a;
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
