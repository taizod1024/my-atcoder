export {};
// main
function main(input: string[]) {
    // param
    var a: number = 0;
    var b: number = 0;
    var h: number = 0;
    var m: number = 0;
    var ans: number = 0;
    // init
    [a, b, h, m] = input.shift().split(" ").map(x => Number(x));
    // solve
    var ar = (h * 60 + m) / (12 * 60) * 2 * Math.PI;
    var br = m / 60 * 2 * Math.PI;
    var ax = a * Math.cos (ar);
    var ay = a * Math.sin (ar);
    var bx = b * Math.cos (br);
    var by = b * Math.sin (br);
    var ans = Math.sqrt((ax-bx)*(ax-bx)+(ay-by)*(ay-by));
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
