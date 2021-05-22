export { };
// main
function main(input: string[]) {
    // param
    // ----
    // let ans: bigint; 
    let ans;
    let r, x, y;
    // init
    [r, x, y] = input.shift().split(" ").map(x => Number(x));
    // solve
    let d = Math.sqrt(x * x + y * y);
    if (d < r) ans = 2;
    else if (d == r) ans = 1;
    else ans = Math.ceil(d / r);
    // answer
    return ans;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
