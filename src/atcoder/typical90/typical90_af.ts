export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const wordit = readline[Symbol.asyncIterator]();
    async function read() { return (await wordit.next()).value; }
    // param
    let n: number;
    let ann: number[][];
    let m: number;
    let xm: number[], ym: number[];
    // init
    n = Number((await read()));
    ann = new Array(n);
    for (let nx = 0; nx < n; nx++) {
        ann[nx] = (await read()).split(" ").map(x => Number(x));
    }
    m = Number((await read()));
    [xm, ym] = [new Array(n), new Array(n)];
    for (let mx = 0; mx < m; mx++) {
        [xm[mx], ym[mx]] = (await read()).split(" ").map(x => Number(x) - 1);
    }
    // solve
    let xynn = new Array(n).fill(null).map(x => new Array(n).fill(true));
    for (let mxx = 0; mxx < m; mxx++) {
        xynn[xm[mxx]][ym[mxx]] = false;
        xynn[ym[mxx]][xm[mxx]] = false;
    }
    let ans = Number.MAX_SAFE_INTEGER;
    (function loop(seq = 0, path: number[] = [], time = 0) {
        if (seq < n) {
            for (let nx = 0; nx < n; nx++) {
                if (1 <= seq) {
                    if (path.includes(nx)) continue;
                    if (!xynn[path.slice(-1)[0]][nx]) continue;
                }
                path.push(nx);
                loop(seq + 1, path, time + ann[nx][seq]);
                path.pop();
            }
        } else {
            ans = Math.min(ans, time);
        }
    })();
    if (ans == Number.MAX_SAFE_INTEGER) ans = -1;
    // answer
    console.log(ans);
    return;
}
main();