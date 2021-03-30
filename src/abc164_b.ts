import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var a: number = 0;
    var b: number = 0;
    var c: number = 0;
    var d: number = 0;
    var ans: string = "";
    // init
    [a, b, c, d] = input.shift().split(" ").map(x => Number(x));
    // solve
    while (true) {
        c -= b;
        if (c <= 0 ) {
            ans = "Yes"
            break;
        }
        a -= d;
        if (a <= 0) {
            ans = "No";
            break;
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
