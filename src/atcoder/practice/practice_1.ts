export { };
// main
function main(input: string[]) {
    // param
    let a: number = 0;
    let b: number = 0;
    let c: number = 0;
    let s: string = "";
    let ans: string = "";
    // init
    a = Number(input.shift());
    [b, c] = input.shift().split(" ").map(x => Number(x));
    s = input.shift();
    // solve
    ans = `${a + b + c} ${s}`;
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
