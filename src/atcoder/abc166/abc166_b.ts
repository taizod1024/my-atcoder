export {};
// main
function main(input: string[]) {
    // param
    let n: number = 0;
    let k: number = 0;
    let dk: number[] = [];
    let akd: number[][] = [];
    let ans: number = 0;
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    for (let kx = 0; kx < k; kx++) {
        dk.push(Number(input.shift()));
        akd.push(input.shift().split(" ").map(x => Number(x) - 1));
    }
    // solve
    let w = new Array(n).fill(0);
    for (let kx = 0; kx < akd.length; kx++) {
        for (let dx = 0; dx < akd[kx].length; dx ++) {
            w[akd[kx][dx]]++;
        }
    }
    ans = w.filter(x => x ==0).length;
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
