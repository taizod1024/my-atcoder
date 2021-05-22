export {};
// main
function main(input: string[]) {
    // param
    let s;
    let ans;
    // init
    s = input.shift();
    // solve
    if (s.substring(s.length-1) != "s") {
        ans = s + "s";
    } else {
        ans = s + "es";
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
