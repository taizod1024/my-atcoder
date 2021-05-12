export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let x;
    // init
    x = input.shift();
    // solve
    let xn = x.split("");
    ans = "";
    for (const xi of xn) {
        if (xi == ".") break;
        ans += xi;
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
