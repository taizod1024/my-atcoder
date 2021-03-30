import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var s: string = "";
    var ans: string = "";
    // init
    s = input.shift();
    // solve
    function isreverse(s: string) {
        return s.split("").reverse().join("") == s;
    }
    if (isreverse(s) &&
        isreverse(s.substring(0, (s.length - 1) / 2)) &&
        isreverse(s.substring((s.length + 3) / 2 - 1, s.length))) {
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
