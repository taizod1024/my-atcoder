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
    cn = input.shift().split(" ").map(x => Number(x));
    // solve
    an.sort((a1, a2) => a1 - a2);
    bn.sort((b1, b2) => b1 - b2);
    cn.sort((c1, c2) => c1 - c2);
    ans = 0;
    for (let nx = 0; nx < n; nx++) {
        let cx = 1;
        for (let nxx = 0; nxx < n; nxx++) {
            let cxx = 1;
            for (let nxxx = 0; nxxx < n; nxxx++) {
                let cxxx = 1;
                // TODO wip
            }
        }
        ans
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
