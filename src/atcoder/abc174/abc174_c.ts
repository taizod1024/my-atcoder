export {};
// main
function main(input: string[]) {
    // param
    var k: number;
    var ans: number = -1;
    // init
    k = Number(input[0]);
    // solve
    var kn = new Array(k + 1).fill(0);
    kn[0] = 0;
    for (var knx = 1; knx <= k; knx++) {
        kn[knx] = (kn[knx - 1] * 10 + 7) % k;
    }
    for (var knx = 1; knx <= k; knx++) {
        if (kn[knx] == 0) {
            ans = knx;
            break;
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
