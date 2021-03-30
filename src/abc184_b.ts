import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n,  x;
    let sn;
    // init
    [n, x] = input.shift().split(" ").map(x => Number(x));
    sn = input.shift().split("");
    // solve
    for (var nx = 0; nx < n; nx ++) {
        if (sn[nx] == "o") {
            x += 1;
        } else if (0 < x) {
            x -= 1;
        }
    }
    ans = x;
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
