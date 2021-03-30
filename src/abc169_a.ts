import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var a: number = 0;
    var b: number = 0;
    var ans: number = 0;
    // init
    [a, b] = input.shift().split(" ").map(x => Number(x));
    ans = 0;
    // solve
    ans = a * b;
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
