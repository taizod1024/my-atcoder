export {};
// main
function main(input: string[]) {
    // param
    let n: number = 0;
    let an: number[] = [];
    let ans: string = "";
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    an.unshift(0);
    an.unshift(0);
    // solve
    let w = new Array(n + 1).fill(0);
    for (let nx = 1; nx <= n; nx++) {
        w[an[nx]]++;
    }
    w.shift();
    ans = w.join("\n").trim();
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
