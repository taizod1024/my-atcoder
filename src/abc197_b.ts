// main
function main(input: string[]) {
    // param
    let ans;
    let h, w, x, y;
    let shw;
    // init
    [h, w, x, y] = input.shift().split(" ").map(x => Number(x));
    shw = input.map(x => x.split(""));
    // solve
    x--;
    y--;
    ans = 0;
    if (shw[x][y] == ".") {
        ans++;
        for (let xx = x - 1; 0 <= xx && shw[xx][y] == "."; xx--) ans++;
        for (let xx = x + 1; xx < h && shw[xx][y] == "."; xx++) ans++;
        for (let yy = y - 1; 0 <= yy && shw[x][yy] == "."; yy--) ans++;
        for (let yy = y + 1; yy < w && shw[x][yy] == "."; yy++) ans++;
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
