import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    // init
    let n, x;
    let vn, pn;
    [n, x] = input.shift().split(" ").map(x => Number(x));
    [vn, pn] = [new Array(n), new Array(n)];
    for (let nx = 0; nx < n; nx++) {
        [vn[nx], pn[nx]] = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    ans = -1;
    x *= 100;
    let x0 = 0;
    for (let nx = 0; nx < n; nx++) {
        x0 += vn[nx] * pn[nx];
        if (x < x0) {
            ans = nx + 1;
            break;
        }
    }
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
