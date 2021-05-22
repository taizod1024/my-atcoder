export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n, m;
    let sm, cm;
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    [sm, cm] = [new Array(m), new Array(m)];
    for (let mx = 0; mx < m; mx++) {
        [sm[mx], cm[mx]] = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    ans = -1;
    let vl, l;
    if (n == 1) l = 10, vl = [...Array(l)].map((_, i) => i);
    if (n == 2) l = 90, vl = [...Array(l)].map((_, i) => i + 10);
    if (n == 3) l = 900, vl = [...Array(l)].map((_, i) => i + 100);
    loop:
    for (let lx = 0; lx < l; lx ++) {
        let sn =vl[lx].toString().split("");
        for (let mx = 0; mx < m; mx++) {
            if (sn[sm[mx]-1] != cm[mx]) continue loop;
        }
        ans = vl[lx];
        break loop;
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
