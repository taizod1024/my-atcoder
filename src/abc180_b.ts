import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans1;
    let ans2;
    let ans3;
    let n;
    let xn: number[];
    // init
    n = input.shift();
    xn = input.shift().split(" ").map(x => Number(x));
    // solve
    xn = xn.map(x => Math.abs(x));
    ans1 = xn.reduce((sum, x) => sum + x, 0);
    ans2 = Math.sqrt(xn.reduce((sum, x) => sum + x * x, 0));
    ans3 = xn.reduce((max, x) => Math.max(max, x));
    // answer
    console.log(ans1);
    console.log(ans2);
    console.log(ans3);
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
