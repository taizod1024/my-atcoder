// main
function main(input: string[]) {
    // param
    var n: number = 0;
    var an: bigint[] = [];
    var ans: string = "";
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => BigInt(x));
    // solve
    an.sort(function (x, y) {
        var w: bigint = x - y;
        if (w < 0) return -1;
        else if (w > 0) return 1;
        else return 0;
    });
    var n1018 = BigInt(Math.pow(10, 18));
    var val = 1n;
    for (var nx = 0; nx < n; nx++) {
        if (an[nx] == 0n) {
            val = 0n
            break;
        }
        val *= an[nx];
        if (n1018 < val) {
            val = -1n;
            break;
        }
    }
    ans = String(val).replace("n", "");
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
