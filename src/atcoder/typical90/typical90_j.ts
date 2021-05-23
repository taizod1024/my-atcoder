export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number;
    let cn: number[], pn: number[];
    let q: number;
    let lq: number[], rq: number[];
    // init
    n = Number(input.shift());
    [cn, pn] = [new Array(n), new Array(n)];
    for (let nx = 0; nx < n; nx++) {
        [cn[nx], pn[nx]] = input[nx].split(" ").map(x => Number(x));
        cn[nx]--;
    }
    input = input.slice(n);
    q = Number(input.shift());
    [lq, rq] = [new Array(q), new Array(q)];
    for (let qx = 0; qx < q; qx++) {
        [lq[qx], rq[qx]] = input[qx].split(" ").map(x => Number(x));
        lq[qx]--;
        rq[qx]--;
    }
    // solve
    let dcn: number[][] = [new Array(n), new Array(n)];
    dcn[0][0] = 0;
    dcn[1][0] = 0;
    dcn[cn[0]][0] = pn[0];
    for (let nx = 1; nx < n; nx++) {
        dcn[0][nx] = dcn[0][nx - 1];
        dcn[1][nx] = dcn[1][nx - 1];
        dcn[cn[nx]][nx] += pn[nx];
    }
    // answer
    for (let qx = 0; qx < q; qx++) {
        let c1 = dcn[0][rq[qx]] - (lq[qx] ? dcn[0][lq[qx] - 1] : 0);
        let c2 = dcn[1][rq[qx]] - (lq[qx] ? dcn[1][lq[qx] - 1] : 0);
        console.log(c1, c2);
    }
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
