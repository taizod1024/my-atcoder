export {};
// main
function main(input: string[]) {
    // param
    let k: number = 0;
    let a: number = 0;
    let b: number = 0;
    let ans: string = "";
    // init
    k = Number(input.shift());
    [a, b] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = "NG";
    for (let kx = 0; kx <= 1000; kx += k) {
        if (a <= kx && kx <= b) {
            ans = "OK";
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
    reader.on('close', function () { main(lines); });
}
entrypoint();
