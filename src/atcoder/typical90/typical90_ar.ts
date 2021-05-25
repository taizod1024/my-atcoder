export { };
// main
function main(input: string[]) {
    // param
    let n: number, q: number;
    let an: number[];
    let tq: number[], xq: number[], yq: number[];
    // init
    [n, q] = input.shift().split(" ").map(x => Number(x));
    an = input.shift().split(" ").map(x => Number(x));
    [tq, xq, yq] = [new Array(n), new Array(n), new Array(n)];
    for (let qx = 0; qx < q; qx++) {
        [tq[qx], xq[qx], yq[qx]] = input[qx].split(" ").map(x => Number(x));
        xq[qx]--;
        yq[qx]--;
    }
    // solve
    let ofs: number = 0;
    function offset(idx: number) { return (ofs + idx) % n; }
    function shift() { ofs--; ofs = offset(n); }
    for (let qx = 0; qx < q; qx++) {
        if (tq[qx] == 1) {
            [an[offset(xq[qx])], an[offset(yq[qx])]] = [an[offset(yq[qx])], an[offset(xq[qx])]];
        } else if (tq[qx] == 2) {
            shift();
        } else {
            // answer
            console.log(an[offset(xq[qx])]);
        }
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
