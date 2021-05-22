export { };
// main
function main(input: string[]): string {
    // param
    let ans: string;
    let n: number;
    // init
    n = Number(input.shift());
    // solve
    let snm: string[][] = [];
    for (let nx = 0; nx <= n; nx++) {
        snm.push([]);
        if (nx == 0) {
            snm[nx].push("-");
        } else if (nx % 2 != 0) {
            snm[nx].push("-");
        } else if (nx == 2) {
            snm[nx].push("()");
        } else {
            for (let mx = 0; mx < snm[nx - 2].length; mx++) {
                snm[nx].push("(" + snm[nx - 2][mx] + ")");
            }
            for (let nxx = 2; nxx < nx; nxx += 2) {
                for (let mxx = 0; mxx < snm[nxx].length; mxx++) {
                    for (let mxxx = 0; mxxx < snm[nx - nxx].length; mxxx++) {
                        snm[nx].push(snm[nxx][mxx] + snm[nx - nxx][mxxx]);
                    }
                }
            }
        }
    }
    ans = snm[n].sort().join("\n");
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
