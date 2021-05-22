export {};
// main
function main(input: string[]) {
    // param
    // let ans: bigint; 
    let ans;
    let a, b;
    let c, d;
    // init
    [a, b] = input.shift().split(" ").map(x => Number(x));
    [c, d] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = a * d - b * c;
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
