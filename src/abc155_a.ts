// main
function main(input: string[]) {
    // param
    let a, b, c;
    let ans;
    // init
    [a, b, c] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = "No";
    if (a == b && b != c) ans = "Yes";
    if (b == c && c != a) ans = "Yes";
    if (c == a && a != b) ans = "Yes";
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
