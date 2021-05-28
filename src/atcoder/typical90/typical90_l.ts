export { };
// main
function main(input: string[]) {
    // param
    let h: number, w: number;
    let q: number;
    let qqn: number[][];
    // init
    [h, w] = input.shift().split(" ").map(x => Number(x));
    q = Number(input.shift());
    qqn = input.map(x => x.split(" ").map(x => Number(x) - 1));
    // solve
    let hw = new Array(h).fill(null).map(x => new Array(w).fill(-1));
    for (let qx = 0; qx < q; qx++) {
        if (qqn[qx][0] == 0) {
            hw[qqn[qx][1]][qqn[qx][2]] = q;
        } else {
            if (hw[qqn[qx][1]][qqn[qx][2]] < qx) {
                console.log("No");
                continue;
            }
            if (hw[qqn[qx][3]][qqn[qx][4]] < qx) {
                console.log("No");
                continue;
            }
            // sub task
            let start = [qqn[qx][1], qqn[qx][2]];
            let end = [qqn[qx][3], qqn[qx][4]];
            let points = [start];
            let point;
            let next;
            // // WIP テスト通らず
            while (point = points.pop()) {
                if (point[0] == end[0] && point[1] == end[1]) { console.log("Yes"); break; }
                if (0 < point[0]) {
                    next = [point[0] - 1, point[1]];
                    if (qx <= hw[next[0]][next[1]]) points.push(next);
                }
                if (point[0] < h - 1) {
                    next = [point[0] + 1, point[1]];
                    if (qx <= hw[next[0]][next[1]]) points.push(next);
                }
                if (0 < point[1]) {
                    next = [point[0], point[1] - 1];
                    if (qx <= hw[next[0]][next[1]]) points.push(next);
                }
                if (point[1] < w - 1) {
                    next = [point[0], point[1] + 1];
                    if (qx <= hw[next[0]][next[1]]) points.push(next);
                }
            }
            continue;
        }
    }
    // answer
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
