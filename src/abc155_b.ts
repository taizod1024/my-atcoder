import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let n;
    let an;
    let ans;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = "APPROVED";
    for (var ane of an) {
        if (ane % 2 == 0) {
            if (ane % 3 == 0 || ane % 5 == 0) {
                continue;
            }
            else {
                ans = "DENIED";
                break;
            }
        } else {
            continue;
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
