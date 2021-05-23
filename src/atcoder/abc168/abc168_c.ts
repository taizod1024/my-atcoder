export {};
// main
function main(input: string[]) {
    // param
    let a: number = 0;
    let b: number = 0;
    let h: number = 0;
    let m: number = 0;
    let ans: number = 0;
    // init
    [a, b, h, m] = input.shift().split(" ").map(x => Number(x));
    // solve
    let ar = (h * 60 + m) / (12 * 60) * 2 * Math.PI;
    let br = m / 60 * 2 * Math.PI;
    let ax = a * Math.cos (ar);
    let ay = a * Math.sin (ar);
    let bx = b * Math.cos (br);
    let by = b * Math.sin (br);
    let ans = Math.sqrt((ax-bx)*(ax-bx)+(ay-by)*(ay-by));
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
