// main
function main(input: string[]) {
    // param
    var s: number = 0;
    var w: number = 0;
    var ans: string = "";
    // init
    [s, w] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = (s <= w) ? "unsafe" : "safe"; 
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
