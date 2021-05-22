export {};
// main
function main(input: string[]) {
    // param
    let n: number;
    let m: number;
    let k: number[];
    let s: number[][];
    let p: number[];
    let ans;
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    p = input.pop().split(" ").map(x => Number(x));
    s = input.map(x => x.split(" ").map(x => Number(x)));
    k = [];
    for (let ix = 0; ix < s.length; ix++) {
        k[ix] = s[ix].shift();
    }
    ans = 0;
    // solve
    let imax = 1 << n;;
    for (let ix = 0; ix < imax; ix++) {
        let n_on = new Array(n);
        for (let nx = 0; nx < n; nx++) {
            if (ix & (1 << nx)) {
                n_on[nx] = 1;
            } else {
                n_on[nx] = 0;
            }
        }
        let m_cnt = 0;
        for (let mx = 0; mx < m; mx++) {
            let k_cnt = 0;
            for (let kx = 0; kx < k[mx]; kx++) {
                if (n_on[s[mx][kx] - 1] == 1) k_cnt++;
            }
            // 点灯表示条件確認
            if (k_cnt % 2 == p[mx]) m_cnt++;
        }
        if (m_cnt == m) ans++;
    }
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; main(input); });
}
entrypoint();
