import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let a: number = 0;
    let b: number = 0;
    let c: number = 0;
    let s: string = "";
    let ans: string = "";
    // init
    a = Number(input.shift());
    [b, c] = input.shift().split(" ").map(x => Number(x));
    s = input.shift();
    // solve
    ans = `${a + b + c} ${s}`;
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
