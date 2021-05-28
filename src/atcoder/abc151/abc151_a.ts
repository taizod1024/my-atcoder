export { };
// main
function main(input: string[]) {
    // param
    let s: string;
    s = input.shift();
    // solve
    let ans = String.fromCharCode(s.charCodeAt(0) + 1);
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
