export {};
// main
function main(input: string[]) {
    // param
    var a: number = 0;
    var b: number = 0;
    var c: number = 0;
    var k: number = 0;
    var ans: number = 0;
    // init
    [a, b, c, k] = input.shift().split(" ").map(x => Number(x));
    // solve
    if (k < a) ans = k;
    else if (k < a + b) ans = a;
    else ans = a - (k - a - b);
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
