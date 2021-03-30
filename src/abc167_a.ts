import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var s: string = "";
    var t: string = "";
    var ans: string = "";
    // init
    s = input.shift();
    t = input.shift();
    // solve
    if (t.substring(0, s.length) == s) {
        ans = "Yes";
    } else {
        ans = "No";
    }
    // answer
    return ans;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
