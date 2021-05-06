export {};
// main
function main(input: string[]) {
    // param
    let h;
    let ans;
    // init
    h = BigInt(input.shift());
    // solve
    ans = 0n;
    do {
        h = h >> 1n;
        ans = ans << 1n | 1n;
    }
    while (h != 0n);
    ans = ans.toString().replace("n", "");
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
