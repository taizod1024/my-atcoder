import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var s: string;
    var t: string;
    var ans: number;
    // init
    s = input[0];
    t = input[1];
    // solve
    var l = t.length;
    for (var i = 0; i <= s.length - t.length; i++) {
        var l0 = 0;
        for (var j = 0; j < t.length; j++) {
            if (s[i + j] != t[j]) {
                l0++;
                if (l < l0) break;
            }
        }
        if (l0 < l) l = l0;
        if (l == 0) break;
    }
    ans = l;
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
