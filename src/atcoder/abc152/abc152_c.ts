export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let pn;
    // init
    n = Number(input.shift());
    pn = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = 0;
    let p0 = 200000;
    for (const p of pn) {
        if (p0 >= p) {
            p0 = p;
            ans ++;
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
