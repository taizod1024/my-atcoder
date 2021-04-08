export {};
// main
function main(input: string[]) {
    // param
    var n: number;
    var an: number[] = [];
    var q: number;
    var bq: number[] = [];
    var cq: number[] = [];
    var ans: number;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    q = Number(input.shift());
    for (var qx = 0; qx < q; qx++) {
        [bq[qx], cq[qx]] = input[qx].split(" ").map(x => Number(x));
    }
    // solve
    ans = an.reduce((x, y) => x + y);
    var an1 = new Array(100001).fill(0);
    for (var nx = 0; nx < n; nx++) {
        an1[an[nx]]++;
    }
    for (var qx = 0; qx < q; qx++) {
        ans -= bq[qx] * an1[bq[qx]];
        ans += cq[qx] * an1[bq[qx]];
        an1[cq[qx]] += an1[bq[qx]];
        an1[bq[qx]] = 0;
        // answer
        return ans;
    }
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
