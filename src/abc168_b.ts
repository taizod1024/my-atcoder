// main
function main(input: string[]) {
    // param
    var k: number = 0;
    var s: string = "";
    var ans: string = "";
    // init
    k = Number(input.shift());
    s = input.shift();
    // solve
    if (s.length <= k) {
        ans = s;
    } else {
        ans = s.substring(0, k) + "...";
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
