export {};
// main
function main(input: string[]) {
    // param
    let ans;
    // init
    let v, t, s, d;
    [v, t, s, d] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = (d < v * t || v * s < d) ? "Yes" : "No";
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
