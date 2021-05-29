export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readiter = readline[Symbol.asyncIterator]();
    async function readlineasync() { return (await readiter.next()).value; }
    // param
    let h: number, w: number;
    let q: number;
    let qqn: number[][];
    // init
    [h, w] = (await readlineasync()).split(" ").map(x => Number(x));
    q = Number(await readlineasync());
    qqn = [];
    for (let qx = 0; qx < q; qx++) {
        qqn.push((await readlineasync()).split(" ").map(x => Number(x) - 1));
    }
    // WIP 提出でTLEあり、初期化を変更する
    // solve
    let hw = new Array(h).fill(null).map(x => new Array(w).fill(-2));
    for (let qx = 0; qx < q; qx++) {
        if (qqn[qx][0] == 0) {
            hw[qqn[qx][1]][qqn[qx][2]] = -1;
        } else {
            let start = [qqn[qx][1], qqn[qx][2]];
            let end = [qqn[qx][3], qqn[qx][4]];
            if (hw[start[0]][start[1]] == -2) {
                console.log("No");
                continue;
            }
            if (hw[end[0]][end[1]] == -2) {
                console.log("No");
                continue;
            }
            let points = [start];
            while (true) {
                let point = points.pop();
                if (!point) {
                    console.log("No");
                    break;
                }
                if (point[0] == end[0] && point[1] == end[1]) {
                    console.log("Yes");
                    break;
                }
                if (0 < point[0]) {
                    let next = [point[0] - 1, point[1]];
                    if (-1 <= hw[next[0]][next[1]] && hw[next[0]][next[1]] < qx) {
                        hw[next[0]][next[1]] = qx;
                        points.push(next);
                    }
                }
                if (point[0] < h - 1) {
                    let next = [point[0] + 1, point[1]];
                    if (-1 <= hw[next[0]][next[1]] && hw[next[0]][next[1]] < qx) {
                        hw[next[0]][next[1]] = qx;
                        points.push(next);
                    }
                }
                if (0 < point[1]) {
                    let next = [point[0], point[1] - 1];
                    if (-1 <= hw[next[0]][next[1]] && hw[next[0]][next[1]] < qx) {
                        hw[next[0]][next[1]] = qx;
                        points.push(next);
                    }
                }
                if (point[1] < w - 1) {
                    let next = [point[0], point[1] + 1];
                    if (-1 <= hw[next[0]][next[1]] && hw[next[0]][next[1]] < qx) {
                        hw[next[0]][next[1]] = qx;
                        points.push(next);
                    }
                }
            }
        }
    }
    // answer
    return;
}
main();
