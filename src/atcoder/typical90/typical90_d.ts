export { };
// main
function main(input: string[]) {
    // param
    let h: number, w: number;
    let ahw: number[][];
    // init
    [h, w] = input.shift().split(" ").map(x => Number(x));
    ahw = input.map(x => x.split(" ").map(x => Number(x)));
    // solve
    let bh: number[] = new Array(h).fill(0);
    let bw: number[] = new Array(w).fill(0);
    for (let hx = 0; hx < h; hx++) {
        for (let wx = 0; wx < w; wx++) {
            bh[hx] += ahw[hx][wx]
            bw[wx] += ahw[hx][wx]
        }
    }
    // answer
    let cw: number[] = new Array(w);
    for (let hx = 0; hx < h; hx++) {
        for (let wx = 0; wx < w; wx++) {
            cw[wx] = bh[hx] + bw[wx] - ahw[hx][wx];
        }
        console.log(...cw);
    }
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
