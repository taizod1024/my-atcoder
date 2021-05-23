export { };
// main
function main(input: string[]) {

    // param
    let ans: number;
    let n: number;
    let an: number[];
    let bn: number[];
    let cn: number[];

    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    bn = input.shift().split(" ").map(x => Number(x));
    cn = input.shift().split(" ").map(x => Number(x));

    // solve
    let m: number = 46;
    let am = new Array(m).fill(0);
    let bm = new Array(m).fill(0);
    let cm = new Array(m).fill(0);
    for (let nx = 0; nx < n; nx++) {
        am[an[nx] % m]++;
        bm[bn[nx] % m]++;
        cm[cn[nx] % m]++;
    }
    ans = 0;
    am.forEach((av, ax) => bm.forEach((bv, bx) => cm.forEach((cv, cx) => {
        if ((ax + bx + cx) % m == 0) ans += av * bv * cv;
    })));

    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
