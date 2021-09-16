export { };
// main
async function main() {

    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readlineit = readline[Symbol.asyncIterator]();
    const readwordit = (async function* () { for await (const line of readlineit) for (const word of line.split(" ")) yield await word; })();
    const inputline = async () => (await readlineit.next()).value;
    const inputword = async () => (await readwordit.next()).value;

    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }

    // param
    let n: number, m: number;
    let am: number[] = [], bm: number[] = [];

    // init
    n = Number((await inputword()));
    m = Number((await inputword()));
    for (const mx of startlen(0, m)) {
        am.push(Number(await inputword()) - 1);
        bm.push(Number(await inputword()) - 1);
    }

    // solve
    let ans = 0;
    const path = new Array(n).fill(null).map(x => []);
    for (const mx of startlen(0, m)) {
        path[am[mx]].push(bm[mx]);
    }
    const visited = new Array(n);
    for (const nx of startlen(0, n)) {
        visited.fill(0);
        (function dfs(from = nx) {
            if (visited[from]) return;
            visited[from] = 1;
            for (const to of path[from]) {
                dfs(to);
            }
        })();
        ans += visited.reduce((p, c) => p + c);
    }

    // answer
    console.log(ans);

    return;
}
main();
