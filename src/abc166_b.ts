// main
function main(input: string[]) {
    // param
    var n: number = 0;
    var k: number = 0;
    var dk: number[] = [];
    var akd: number[][] = [];
    var ans: number = 0;
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    for (var kx = 0; kx < k; kx++) {
        dk.push(Number(input.shift()));
        akd.push(input.shift().split(" ").map(x => Number(x) - 1));
    }
    // solve
    var w = new Array(n).fill(0);
    for (var kx = 0; kx < akd.length; kx++) {
        for (var dx = 0; dx < akd[kx].length; dx ++) {
            w[akd[kx][dx]]++;
        }
    }
    ans = w.filter(x => x ==0).length;
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
