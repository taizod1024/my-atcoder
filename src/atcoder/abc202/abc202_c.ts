export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number;
    let an: number[];
    let bn: number[];
    let cn: number[];
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    bn = input.shift().split(" ").map(x => Number(x));
    cn = input.shift().split(" ").map(x => Number(x) - 1);
    // solve
    an.sort((a1, a2) => a1 - a2);
    let bcn: number[] = [];
    for (let nx = 0; nx < n; nx++) {
        bcn.push(bn[cn[nx]]);
        continue;
    }
    bcn.sort((bc1, bc2) => bc1 - bc2);
    ans = 0;
    let nax = 0;
    let nbcx = 0;
    while (nax < n && nbcx < n) {
        let a = an[nax];
        let b = bcn[nbcx];
        if (a < b) {
            nax++;
            continue;
        }
        if (a > b) {
            nbcx++;
            continue
        }
        let ac = 1;
        while (++nax < n && an[nax] == a) ac++;
        let bcc = 1;
        while (++nbcx < n && bcn[nbcx] == b) bcc++;
        ans += ac * bcc;
    }
    // answer
    console.log(ans);
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
