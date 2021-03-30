import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let an;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    an.sort((x, y) => x - y);
    ans = 0;
    let diff = 0;
    let sum = 0;
    for (let nx = 0; nx < n; nx++) {
        if (nx == 0 || an[nx - 1] != an[nx]) {
            sum = 0;
            for (let nxx = nx + 1; nxx < n; nxx++) {
                diff = an[nx] - an[nxx];
                sum += diff * diff;
            }
        }
        ans += sum;
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
