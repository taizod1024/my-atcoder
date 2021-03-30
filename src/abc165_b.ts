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
