import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number, k: number;
    let tnn: number[][];
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    tnn = input.map(x => x.split(" ").map(x => Number(x)));
    // solve
    ans = 0;
    let an = new Array(n).fill(0);
    function travel(nx0: number, sum: number) {
        an[nx0] = 1;
        if (0 <= an.indexOf(0)) {
            for (let nx = 0; nx < n; nx++) {
                if (an[nx] == 0) {
                    travel(nx, sum + tnn[nx0][nx]);
                }
            }
        } else {
            if (sum + tnn[nx0][0] == k) {
                ans++;
            }
        }
        an[nx0] = 0;
    }
    travel(0, 0);
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
