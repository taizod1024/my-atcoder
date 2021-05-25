export { };
// main
function main(input: string[]) {
    // param
    let n: number;
    let ann: number[][];
    let m: number;
    let xm: number[], ym: number[];
    // init
    n = Number(input.shift());
    ann = new Array(n);
    for (let nx = 0; nx < n; nx++) {
        ann[nx] = input.shift().split(" ").map(x => Number(x));
    }
    m = Number(input.shift());
    [xm, ym] = [new Array(n), new Array(n)];
    for (let mx = 0; mx < m; mx++) {
        [xm[mx], ym[mx]] = input[mx].split(" ").map(x => Number(x) - 1);
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
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
