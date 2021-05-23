export {};
// main
function main(input: string[]) {
    // param
    let n: string;
    let ans: string;
    // init
    n = input[0];
    // solve
    let sum = 0;
    let nlen= n.length;
    let czero = "0".charCodeAt(0);
    for (let nx = 0; nx < nlen; nx++) {
        sum += n.charCodeAt(nx) - czero;
    }
    ans = (sum % 9 ==0) ? "Yes" : "No";
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
