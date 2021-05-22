export {};
// main
function main(input: string[]) {
    // param
    var s: string[];
    var ans: number;
    // init
    s = input.shift().split("");
    // solve
    if (s[0] == "R" && s[1] == "R" && s[2] == "R") {
        ans = 3;
    } else if (s[0] == "R" && s[1] == "R") {
        ans = 2;
    } else if (s[1] == "R" && s[2] == "R") {
        ans = 2;
    } else if (s[0] == "R" || s[1] == "R" || s[2] == "R") {
        ans = 1;
    } else {
        ans = 0;
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
