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
    }
    input = input.slice(n);
    q = Number(input.shift());
    for (let qx = 0; qx < q; qx++) {
        [lq[qx], rq[qx]] = input[qx].split(" ").map(x => Number(x));
    }
    // solve
    let dcn: number[][] = [new Array(n), new Array(n)];
    dcn[0][0] = 0;
    dcn[1][0] = 0;
    dcn[cn[0] - 1][0] = pn[0];
    for (let nx = 1; nx < n; nx++) {
        dcn[0][nx] = dcn[0][nx - 1];
        dcn[1][nx] = dcn[1][nx - 1];
        dcn[cn[nx] - 1][nx] += pn[nx];
    }
    for (let qx = 0; qx < q; qx++) {

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
