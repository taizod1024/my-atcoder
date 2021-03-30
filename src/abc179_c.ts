import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let n;
    let ans;
    // init
    n = Number(input.shift());
    // solve
    ans = 0;
    for (var nx = 1; nx < n; nx++) {
        ans += Math.floor((n - 1) / nx);
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
