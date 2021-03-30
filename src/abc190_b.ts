import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    // ----
    // let ans: bigint; 
    let ans;
    let n, s, d;
    let xn, yn;
    // init
    [n, s, d] = input.shift().split(" ").map(x => Number(x));
    [xn, yn] = [new Array(n), new Array(n)];
    for (let nx = 0; nx < n; nx++) {
        [xn[nx], yn[nx]] = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    ans = "No";
    for (let nx = 0; nx < n; nx++) {
        if (s <= xn[nx]) continue;
        if (yn[nx] <= d) continue;
        ans = "Yes";
        break;
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
