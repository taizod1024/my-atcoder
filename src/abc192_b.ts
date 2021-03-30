import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let s;
    // init
    s = input.shift();
    // solve
    let sn = s.split("");
    ans = "Yes";
    for (let nx = 0; nx < s.length; nx++) {
        if (nx % 2 == 0) {
            if (!sn[nx].match(/^[a-z]$/)) { ans = "No"; break; }
        } else {
            if (!sn[nx].match(/^[A-Z]$/)) { ans = "No"; break; }
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
