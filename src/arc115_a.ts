import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    // ----
    // let ans: bigint; 
    let ans;
    let n, m;
    let sn;
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    sn = input;
    // solve
    sn = sn.map(x => x.replace(/0/g, "").length % 2);
    ans = sn.filter(x => x == 0).length * sn.filter(x => x != 0).length;
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
