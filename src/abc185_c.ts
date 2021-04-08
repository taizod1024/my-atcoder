export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let l: number;
    // init
    l = Number(input.shift());
    // solve
    let d = 12;
    let cld = Array.from(new Array(l + 1), () => new Array(d + 1).fill(0n));
    function countpatterns(ll: number, dd: number):BigInt {
        if (dd == 1) return 1n;
        if (ll == dd) return 1n;
        if (0n < cld[ll][dd]) return cld[ll][dd];
        for (let lx = 1; ll - lx >= dd - 1; lx++) {
            cld[ll][dd] += countpatterns(ll - lx, dd - 1);
        }
        return cld[ll][dd];
    }
    ans = countpatterns(l, d);
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
