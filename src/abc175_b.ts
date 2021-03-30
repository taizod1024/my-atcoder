import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number;
    var l: number[];
    var ans: number;
    // init
    n = Number(input[0]);
    l = input[1].split(" ").map(x => Number(x));
    // solve
    l.sort(Math_compareNumbers);
    ans = 0;
    for (var lx0 = 0; lx0 < l.length; lx0++) {
        for (var lx1 = lx0 + 1; lx1 < l.length; lx1++) {
            if (l[lx0] == l[lx1]) continue;
            for (var lx2 = lx1 + 1; lx2 < l.length; lx2++) {
                if (l[lx1] == l[lx2]) continue;
                if (l[lx0] + l[lx1] <= l[lx2]) break;
                ans++;
            }
        }
    }
    // answer
    return ans;
}
// compare lib
function Math_compareNumbers(a: number, b: number): number {
    return a - b;
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
