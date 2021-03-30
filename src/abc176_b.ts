import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: string;
    var ans: string;
    // init
    n = input[0];
    // solve
    var sum = 0;
    var nlen= n.length;
    var czero = "0".charCodeAt(0);
    for (var nx = 0; nx < nlen; nx++) {
        sum += n.charCodeAt(nx) - czero;
    }
    ans = (sum % 9 ==0) ? "Yes" : "No";
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
