export { };
// main
function main(input: string[]) {
    // param
    let ans: string;
    let h: number, w: number;
    let ahw: number[][];
    // init
    [h, w] = input.shift().split(" ").map(x => Number(x));
    ahw = input.map(x => x.split(" ").map(x => Number(x)));
    // solve
    let bh: number[] = new Array(h).fill(0);
    for (let hx = 0; hx < h; hx++) {
        for (let wx = 0; wx < w; wx++) {
            bh[hx] += ahw[hx][wx]
        }
    }
    let bw: number[] = new Array(w).fill(0);
    for (let wx = 0; wx < w; wx++) {
        for (let hx = 0; hx < h; hx++) {
            bw[wx] += ahw[hx][wx]
        }
    }
    let bhw: number[][] = [];
    for (let hx = 0; hx < h; hx++) {
        bhw.push([]);
        for (let wx = 0; wx < w; wx++) {
            bhw[hx].push(bh[hx] + bw[wx] - ahw[hx][wx]);
        }
    }
    ans = bhw.map(bw => bw.join(" ")).join("\n");
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
