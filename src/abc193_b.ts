import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let apxn;
    // init
    n = Number(input.shift());
    apxn = input.map(x => x.split(" ").map(x => Number(x)));
    // solve
    apxn = apxn.filter(x => x[0] < x[2]).sort((x, y) => x[1] - y[1]);
    ans = apxn.length == 0 ? -1 : apxn[0][1];
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
