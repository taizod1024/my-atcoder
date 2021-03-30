import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: bigint = 0n;
    var k: bigint = 0n;
    var ans: string = "";
    // init
    [n, k] = input.shift().split(" ").map(x => BigInt(x));
    // solve
    var m = n % k;
    ans = String((m < k - m) ? m : k - m).replace("n", "");
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
