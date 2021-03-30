import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let sn;
    // init
    n = Number(input.shift());
    sn = input;
    // solve
    let sn0 = new Array();
    let sn1 = new Array();
    sn.forEach(x => (!x.startsWith("!") ? sn0 : sn1).push(x.replace("!", "")));
    sn0 = Array.from(new Set(sn0)).sort();
    sn1 = Array.from(new Set(sn1)).sort();
    let n0x = 0;
    let n1x = 0;
    ans = "satisfiable";
    while (sn0[n0x] && sn1[n1x]) {
        if (sn0[n0x] < sn1[n1x]) { n0x++; continue; }
        if (sn0[n0x] > sn1[n1x]) { n1x++; continue; }
        ans = sn0[n0x]; break;
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
