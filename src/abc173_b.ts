import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number;
    var sn: string[];
    var ans_ac: number = 0;
    var ans_wa: number = 0;
    var ans_tle: number = 0;
    var ans_re: number = 0;
    // init
    n = Number(input.shift());
    sn = input;
    // solve
    for (var snx=0; snx < sn.length; snx++) {
        if (sn[snx] == "AC") ans_ac ++;
        else if (sn[snx] == "WA") ans_wa ++;
        else if (sn[snx] == "TLE") ans_tle ++;
        else if (sn[snx] == "RE") ans_re ++;
    }
    // answer
    console.log(`AC x ${ans_ac}`);
    console.log(`WA x ${ans_wa}`);
    console.log(`TLE x ${ans_tle}`);
    console.log(`RE x ${ans_re}`);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
