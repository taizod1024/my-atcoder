export {};
// main
function main(input: string[]) {
    // param
    let k: number = 0;
    let s: string = "";
    let ans: string = "";
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
