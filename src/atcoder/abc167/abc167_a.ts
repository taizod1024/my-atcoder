export {};
// main
function main(input: string[]) {
    // param
    let s: string = "";
    let t: string = "";
    let ans: string = "";
    // init
    s = input.shift();
    t = input.shift();
    // solve
    if (t.substring(0, s.length) == s) {
        ans = "Yes";
    } else {
        ans = "No";
    }
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; main(input); });
}
entrypoint();
