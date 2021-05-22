export {};
// main
function main(input: string[]) {
    // param
    let ans;
    // init
    let a, b, w;
    [a, b, w] = input.shift().split(" ").map(x => Number(x));
    // solve
    w *= 1000;
    let max = Math.floor(w / a);
    let min = Math.ceil(w / b);
    if (min <= max) {
        ans = min + " " + max;
    } else {
        ans = "UNSATISFIABLE";
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
