export {};
// main
function main(input: string[]) {
    // param
    let n;
    let an;
    let ans;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = "APPROVED";
    for (var ane of an) {
        if (ane % 2 == 0) {
            if (ane % 3 == 0 || ane % 5 == 0) {
                continue;
            }
            else {
                ans = "DENIED";
                break;
            }
        } else {
            continue;
        }
    }
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
