export { };
// main
function main(input: string[]): number {
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

    // TODO wip
    
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
