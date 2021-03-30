import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let h, w;
    let ahw;
    // init
    [h, w] = input.shift().split(" ").map(x => Number(x));
    ahw = input.map(x => x.split(" ").map(x => Number(x)));
    // solve
    let min = 100;
    for (let hx = 0; hx < h; hx++) {
        for (let wx = 0; wx < w; wx++) {
            if (ahw[hx][wx] < min) min = ahw[hx][wx];
        }
    }
    ans = 0;
    for (let hx = 0; hx < h; hx++) {
        for (let wx = 0; wx < w; wx++) {
            ans += ahw[hx][wx] - min;
        }
    }
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
