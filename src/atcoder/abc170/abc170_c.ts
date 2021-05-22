export {};
// main
function main(input: string[]) {
    // param
    let x: number = 0;
    let n: number = 0;
    let pn: number[] = [];
    let ans: number = 0;
    // init
    [x, n] = input.shift().split(" ").map(x => Number(x));
    if (0 < n) {
        pn = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    let pa = new Array(200).fill(0);
    for (let pnx = 0; pnx < pn.length; pnx++) {
        pa[pn[pnx]] = 1;
    }
    for (let i = 0; i < pa.length; i++) {
        if (pa[x - i] == 0) {
            ans = x - i;
            break;
        }
        if (pa[x + i] == 0) {
            ans = x + i;
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
