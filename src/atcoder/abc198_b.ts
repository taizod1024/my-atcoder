export { };
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    // init
    n = Number(input.shift());
    // solve
    let sm = n.toString().replace(/0+$/, "").split("");
    let m = sm.length;
    ans = "Yes";
    for (let mx = 0; mx < Math.floor(m / 2); mx++) {
        if (sm[mx] != sm[m - mx - 1]) {
            ans = "No";
            break;
        }
    }
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
