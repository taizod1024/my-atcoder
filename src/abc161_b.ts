import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number = 0;
    var m: number = 0;
    var an: number[] = [];
    var ans: string = "";
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    an.sort((x, y) => y - x);
    var sum = an.reduce((x, y) => x + y);
    var min = sum / (4 * m);
    ans = "Yes";
    for (var nx = 0; nx < m; nx++) {
        if (an[nx] < min) {
            ans = "No"
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
