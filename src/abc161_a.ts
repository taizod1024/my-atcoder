import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var x: number = 0;
    var y: number = 0;
    var z: number = 0;
    var ans: string = "";
    // init
    [x, y, z] = input.shift().split(" ").map(x => Number(x));
    // solve
    [x, y] = [y, x];
    [x, z] = [z, x];
    ans = x + " " + y + " " + z;
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
