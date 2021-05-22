export {};
// main
function main(input: string[]) {
    // param
    let s: number = 0;
    let ans: number = 0;
    // init
    s = Number(input.shift());
    // solve
    let m = new Array(s + 1).fill(0);
    for (let mx = 1; mx <= s; mx++) {
        if (mx < 3) m[mx] = 0;
        else if (mx < 6) m[mx] = 1;
        else {
            let w = 1;
            for (let nx = 3; nx <= mx - 3; nx++) {
                w += m[mx - nx];
            }
            m[mx] = w % 1000000007;
        }
    }
    ans = m[s];
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
