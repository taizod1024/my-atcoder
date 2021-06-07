export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readlineiter = readline[Symbol.asyncIterator]();
    const readworditer = (async function* () { for await (const vals of readlineiter) for (const val of vals.split(" ")) yield await val; })();
    const inputline = async () => { return (await readlineiter.next()).value; };
    const inputword = async () => { return (await readworditer.next()).value; };
    // param
    let n: number, m: number;
    let am: number[], bm: number[];
    // init
    n = Number((await inputword()));
    m = Number((await inputword()));
    am = [];
    bm = [];
    for (let mx = 0; mx < m; mx++) {
        am.push(Number(await inputword()) - 1);
        bm.push(Number(await inputword()) - 1);
    }
    // solve
    let ans = 0;
    let path = new Array(n).fill(null).map(x => []);
    for (let mx = 0; mx < m; mx++) {
        path[am[mx]].push(bm[mx]);
    }
    let visited = new Array(n);
    for (let nx = 0; nx < n; nx++) {
        visited.fill(0);
        (function dfs(from = nx) {
            if (visited[from]) return;
            visited[from] = 1;
            for (let to of path[from]) {
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
