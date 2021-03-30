import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number;
    var m: number;
    var k: number[];
    var s: number[][];
    var p: number[];
    var ans;
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    p = input.pop().split(" ").map(x => Number(x));
    s = input.map(x => x.split(" ").map(x => Number(x)));
    k = [];
    for (var ix = 0; ix < s.length; ix++) {
        k[ix] = s[ix].shift();
    }
    ans = 0;
    // solve
    var imax = 1 << n;;
    for (var ix = 0; ix < imax; ix++) {
        var n_on = new Array(n);
        for (var nx = 0; nx < n; nx++) {
            if (ix & (1 << nx)) {
                n_on[nx] = 1;
            } else {
                n_on[nx] = 0;
            }
        }
        var m_cnt = 0;
        for (var mx = 0; mx < m; mx++) {
            var k_cnt = 0;
            for (var kx = 0; kx < k[mx]; kx++) {
                if (n_on[s[mx][kx] - 1] == 1) k_cnt++;
            }
            // 点灯表示条件確認
            if (k_cnt % 2 == p[mx]) m_cnt++;
        }
        if (m_cnt == m) ans++;
    }
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
