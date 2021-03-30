import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number;
    var an: bigint[];
    var ans;
    // init
    n = +input[0];
    an = input[1].split(" ").map(x => BigInt(x));
    var m: bigint = BigInt(Math.pow(10, 9) + 7);
    // solve
    var p: bigint = 0n;
    var s: bigint = 0n;
    for (var i = 0; i < an.length; i++) {
        p = (p + an[i] * s) % m;
        s = (s + an[i]) % m;
    }
    ans = Number(p);
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
