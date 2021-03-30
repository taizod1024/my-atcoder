import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let n: number = 0;
    let xn: number[] = [];
    let yn: number[] = [];
    let ans: number = 0;
    // init
    n = Number(input.shift());
    for (let nx = 0; nx < n; nx++) {
        [xn[nx], yn[nx]] = input[nx].split(" ").map(x => Number(x));
    }
    // solve
    let x2nmax = Number.MIN_SAFE_INTEGER;
    let x2nmin = Number.MAX_SAFE_INTEGER;
    let y2nmax = Number.MIN_SAFE_INTEGER;
    let y2nmin = Number.MAX_SAFE_INTEGER;
    for (var nx = 0; nx < n; nx ++) {
        let x2n = xn[nx] + yn[nx];
        let y2n = xn[nx] - yn[nx];
        x2nmax = Math.max(x2nmax, x2n);
        x2nmin = Math.min(x2nmin, x2n);
        y2nmax = Math.max(y2nmax, y2n);
        y2nmin = Math.min(y2nmin, y2n);
    }
    let x2nlen = Math.abs(x2nmax - x2nmin);
    let y2nlen = Math.abs(y2nmax - y2nmin);
    ans = Math.max(x2nlen, y2nlen);
    // answer
    return ans;
}
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
