export {};
// main
function main(input: string[]) {
    // param
    var n: number = 0;
    var m: number = 0;
    var am: number[] = [];
    var ans: number = 0;
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    am = input.shift().split(" ").map(x => Number(x));
    // solve
    var sum = am.reduce((x,y) => x + y);
    if (n < sum) {
        ans = -1;
    } else {
        ans = n - sum;
    }
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
