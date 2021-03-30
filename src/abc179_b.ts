import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let n;
    let dn: number[][];
    let ans;
    // init
    n = Number(input.shift());
    dn = new Array(n);
    for (let nx = 0; nx < n; nx++) {
        dn[nx] = input[nx].split(" ").map(x => Number(x));
    }
    // solve
    ans = "No";
    let cnt = 0;
    for (let nx = 0; nx < n; nx++) {
        if (dn[nx][0] == dn[nx][1]) {
            cnt++;
            if (3 <= cnt) {
                ans = "Yes";
                break;
            }
        } else {
            cnt = 0;
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
