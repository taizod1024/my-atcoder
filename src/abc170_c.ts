// main
function main(input: string[]) {
    // param
    var x: number = 0;
    var n: number = 0;
    var pn: number[] = [];
    var ans: number = 0;
    // init
    [x, n] = input.shift().split(" ").map(x => Number(x));
    if (0 < n) {
        pn = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    var pa = new Array(200).fill(0);
    for (var pnx = 0; pnx < pn.length; pnx++) {
        pa[pn[pnx]] = 1;
    }
    for (var i = 0; i < pa.length; i++) {
        if (pa[x - i] == 0) {
            ans = x - i;
            break;
        }
        if (pa[x + i] == 0) {
            ans = x + i;
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
