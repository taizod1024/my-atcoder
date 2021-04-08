export {};
// main
function main(input: string[]) {
    // param
    let ans;
    // init
    let h, w;
    let shw: string[][];
    [h, w] = input.shift().split(" ").map(x => Number(x));
    shw = input.map(x => x.split(""));
    // solve
    ans = 0;
    for (let hx = 0; hx < h - 1; hx++) {
        for (let wx = 0; wx < w - 1; wx++) {
            let c = 0;
            if (shw[hx][wx] == "#") c++;
            if (shw[hx + 1][wx] == "#") c++;
            if (shw[hx][wx + 1] == "#") c++;
            if (shw[hx + 1][wx + 1] == "#") c++;
            if (c == 1 || c == 3) ans++;
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
