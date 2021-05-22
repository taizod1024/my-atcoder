export { };
// main
function main(input: string[]): string {
    // param
    let ans: string;
    let n: number;
    let s: string;
    let q: number;
    let tq: number[], aq: number[], bq: number[];
    // init
    n = Number(input.shift());
    s = input.shift();
    q = Number(input.shift());
    [tq, aq, bq] = [new Array(n), new Array(n), new Array(n)];
    for (let qx = 0; qx < q; qx++) {
        [tq[qx], aq[qx], bq[qx]] = input[qx].split(" ").map(x => Number(x));
    }
    // solve
    let sn = s.split("");
    let flip: boolean = false;
    for (let qx = 0; qx < q; qx++) {
        if (tq[qx] == 1) {
            let a = aq[qx] - 1, b = bq[qx] - 1;
            if (flip) {
                a = (a < n) ? a + n : a - n;
                b = (b < n) ? b + n : b - n;
            }
            [sn[a], sn[b]] = [sn[b], sn[a]];
        } else {
            flip = !flip;
        }
    }
    if (!flip) {
        ans = sn.join("");
    } else {
        ans = sn.slice(n).concat(sn.slice(0, n)).join("");
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
