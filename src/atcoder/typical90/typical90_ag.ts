export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let h: number, w: number;
    // init
    [h, w] = input.shift().split(" ").map(x => Number(x));
    // solve
    if (h == 1 || w == 1) ans = h * w;
    else ans = Math.ceil(h / 2) * Math.ceil(w / 2);
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
