import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var h: number;
    var w: number;
    var ch: number;
    var cw: number;
    var dh: number;
    var dw: number;
    var shw: string[][];
    var ans;
    // init
    [h, w] = input.shift().split(" ").map(x => Number(x));
    [ch, cw] = input.shift().split(" ").map(x => Number(x) - 1);
    [dh, dw] = input.shift().split(" ").map(x => Number(x) - 1);
    shw = [];
    for (var hx = 0; hx < h; hx++) {
        shw[hx] = ("##" + input[hx] + "##").split("");
    }
    h += 4;
    w += 4;
    ch += 2;
    cw += 2;
    dh += 2;
    dw += 2;
    shw.unshift(new Array(w).fill("#"));
    shw.unshift(new Array(w).fill("#"));
    shw.push(new Array(w).fill("#"));
    shw.push(new Array(w).fill("#"));
    // solve
    var patn = [
        [-1, +0],
        [+0, -1],
        [+1, +0],
        [+0, +1]
    ];
    var patw = [
        [-2, -2],
        [-2, -1],
        [-2, +0],
        [-2, +1],
        [-2, +2],
        [-1, -2],
        [-1, -1],
        [-1, +1],
        [-1, +2],
        [+0, -2],
        [+0, +2],
        [+1, -2],
        [+1, -1],
        [+1, +1],
        [+1, +2],
        [+2, -2],
        [+2, -1],
        [+2, +0],
        [+2, +1],
        [+2, +2]
    ];
    var quen = [[ch, cw]];
    var quep = [];
    var warp = 0;
    loop: {
        while (true) {
            // normal
            while (0 < quen.length) {
                var cur = quen.pop();
                shw[cur[0]][cur[1]] = warp.toString();
                if (cur == [dh, dw]) break loop;
                quep.push(cur)
                GRAPH_enumPattern(cur, patn).forEach(function (pos) {
                    var chr = shw[pos[0]][pos[1]];
                    if (chr == ".") quen.push(pos);
                });
            }
            // warp
            while (0 < quep.length) {
                var cur = quep.pop();
                GRAPH_enumPattern(cur, patw).forEach(function (pos) {
                    var chr = shw[pos[0]][pos[1]];
                    if (chr == ".") quen.push(pos), shw[pos[0]][pos[1]] = "_";
                });
            }
            if (quen.length == 0) break loop;
            warp++;
        }
    }
    var pos = [dh, dw];
    var chr = shw[pos[0]][pos[1]];
    ans = (chr == ".") ? -1 : chr;
    // answer
    return ans;
}
// graph lib
function GRAPH_enumPattern(cur: number[], pat: number[][]): number[][] {
    var arr = [];
    for (var patx = 0; patx < pat.length; patx++) {
        var pos = [cur[0] + pat[patx][0], cur[1] + pat[patx][1]];
        arr.push(pos);
    }
    return arr;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
