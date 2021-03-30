import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var x: bigint = 0n;
    var ans: number = 0;
    // init
    x = BigInt(input.shift());
    // solve
    ans = 0;
    var val = 100n;
    while (val < x) {
        val *= 101n;
        val /= 100n;
        ans++;
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
