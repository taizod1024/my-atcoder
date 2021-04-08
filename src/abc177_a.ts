export {};
// main
function main(input: string[]) {
    // param
    var d: number = 0;
    var t: number = 0;
    var s: number = 0;
    var ans: string = "";
    // init
    [d, t, s] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = (d <= s * t) ? "Yes" : "No";
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
