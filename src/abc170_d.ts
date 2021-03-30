import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number = 0;
    var an: number[] = [];
    var ans: number = 0;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    an = an.sort((x, y) => x - y);
    var m = Math_max(an) + 1;
    var bm: number[] = new Array(m).fill(0);
    ans = 0;
    for (var nx = n - 1; 0 <= nx; nx--) {
        for (var mx = an[nx]; mx < m; mx += an[nx]) {
            bm[mx] += an[nx];
        }
    }
    for (var nx = 0; nx < n; nx++) {
        if (bm[an[nx]] == an[nx]) ans++;
    }
    // answer
    return ans;
}
// math lib
function Math_max(arr: number[]): number { return arr.reduce((x, y) => Math.max(x, y)); }
// entrypoint
function entrypoint() {
    try {
        // linux
        let input = fs.readFileSync('/dev/stdin', 'utf8').trim().split("\n");
        console.debug = function () { };
        console.log(main(input));
    }
    catch (ex) {
        // windows
        const lines: string[] = [];
        const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
        reader.on('line', function (line: string) { lines.push(line); });
        reader.on('close', function () { let input = lines; console.log(main(input)); });
    }
}
entrypoint();
