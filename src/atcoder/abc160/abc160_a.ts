export {};
// main
function main(input: string[]) {
    // param
    let s: string = "";
    let ans: string = "";
    // init
    s = input.shift();
    // solve
    ans = (s[2] == s[3] && s[4] == s[5]) ? "Yes" : "No";
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
