export {};
// main
function main(input: string[]) {
    // param
    let a: number = 0;
    let b: number = 0;
    let c: number = 0;
    let d: number = 0;
    let ans: string = "";
    // init
    [a, b, c, d] = input.shift().split(" ").map(x => Number(x));
    // solve
    while (true) {
        c -= b;
        if (c <= 0 ) {
            ans = "Yes"
            break;
        }
        a -= d;
        if (a <= 0) {
            ans = "No";
            break;
        }
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
