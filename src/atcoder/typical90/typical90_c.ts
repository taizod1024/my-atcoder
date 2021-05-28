export { };
// main
function main(input: string[]) {
    // param
    let n: number;
    let an: number[], bn: number[];
    // init
    n = Number(input.shift());
    [an, bn] = [new Array(n - 1), new Array(n - 1)];
    for (let nx = 0; nx < an.length; nx++) {
        [an[nx], bn[nx]] = input[nx].split(" ").map(x => Number(x) - 1);
    }
    // union-find lib
    let uf_root: number[];
    let uf_count: number[];
    function UF_initRoot(num: number) {
        uf_root = new Array(num).fill(-1);
        uf_count = new Array(num).fill(1);
    }
    function UF_getRoot(index: number): number {
        if (uf_root[index] < 0) {
            return index;
        } else {
            let work0: number = UF_getRoot(uf_root[index]);
            uf_root[index] = work0;
            return work0
        }
    }
    function UF_mergeRoot(a: number, b: number) {
        let root0: number = UF_getRoot(a);
        let root1: number = UF_getRoot(b);
        if (root0 == root1) return;
        if (root0 > root1) [root0, root1] = [root1, root0];
        uf_count[root0] += uf_count[root1];
        uf_count[root1] = 0;
        uf_root[root1] = root0;
    }
    // solve
    UF_initRoot(n);
    for (let nx = 0; nx < an.length; nx++) {
        UF_mergeRoot(an[nx], bn[nx]);
    }
    uf_count.sort((a, b) => -(a - b));
    // answer
    // WIP 問題を誤読、一番長い経路＋１
    let ans = uf_count[0] + (uf_count[1] ? uf_count[1] + 1 : 0);
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
