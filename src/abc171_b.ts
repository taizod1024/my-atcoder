import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number;
    var k: number;
    var pn: number[];
    var ans: number;
    // init
    [n, k] = input.shift().split(" ").map(x => Number(x));
    pn = input.shift().split(" ").map(x => Number(x));
    // solve
    pn.sort(function (a, b) { return a - b; });
    ans = 0;
    for (var pnx = 0; pnx < k; pnx++) {
        ans += pn[pnx];
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
