import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let xn, yn;
    // init
    n = Number(input.shift());
    [xn, yn] = [new Array(n), new Array(n)];
    for (let nx = 0; nx < n; nx++) {
        [xn[nx], yn[nx]] = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    ans = "No";
    loop:
    for (var nx = 0; nx < n; nx++) {
        for (var nnx = nx + 1; nnx < n; nnx++) {
            for (var nnnx = nnx + 1; nnnx < n; nnnx++) {
                if ((xn[nx] - xn[nnx]) * (yn[nx] - yn[nnnx]) == (xn[nx] - xn[nnnx]) * (yn[nx] - yn[nnx])) {
                    ans = "Yes";
                    break loop;
                }
            }
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
