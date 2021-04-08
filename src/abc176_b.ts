export {};
// main
function main(input: string[]) {
    // param
    var n: string;
    var ans: string;
    // init
    n = input[0];
    // solve
    var sum = 0;
    var nlen= n.length;
    var czero = "0".charCodeAt(0);
    for (var nx = 0; nx < nlen; nx++) {
        sum += n.charCodeAt(nx) - czero;
    }
    ans = (sum % 9 ==0) ? "Yes" : "No";
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
