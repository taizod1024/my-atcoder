export { };
// main
function main(input: string[]) {
    // param
    let ans: string;
    let s: string;
    // init
    s = input.shift();
    // solve
    let cn = ["0", "1", "-", "-", "-", "5", "9", "-", "8", "6"];
    ans = s.split("").reverse().map(x => cn[x]).join("");
    // answer
    console.log(ans);
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
