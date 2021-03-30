import * as fs from 'fs';
import { setMaxListeners } from 'superagent';
// main
function main(input: string[]) {
    // param
    let ans;
    let n, m, q;
    let wvn;
    let xm;
    let qq;
    // init
    [n, m, q] = input.shift().split(" ").map(x => Number(x));
    wvn = new Array(n);
    for (let nx = 0; nx < n; nx++) {
        wvn[nx] = input.shift().split(" ").map(x => Number(x));
    }
    xm = input.shift().split(" ").map(x => Number(x));
    qq = new Array(q);
    for (let qx = 0; qx < q; qx++) {
        qq[qx] = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    wvn = wvn.map(wv => ({ w: wv[0], v: wv[1] })).sort((a, b) => a.w - b.w);
    xm = xm.map((v, x) => ({ v: v, n: x + 1 })).sort((a, b) => a.v - b.v);
    qq = qq.map(q => ({ l: q[0], r: q[1] }));
    let wvn_ = wvn;
    let ansqq = [];
    for (const qi of qq) {
        let ansq = 0;
        let wvn = Array.from(wvn_);
        for (const xi of xm) {
            if (xi.n < qi.l || qi.r < xi.n) {
                let wvz: any = null;
                for (const wvi of wvn) {
                    if (xi.v < wvi.w) break;
                    if (wvz == null || wvz.v < wvi.v) wvz = wvi;
                }
                if (wvz != null) {
                    ansq += wvz.v;
                    wvn = wvn.filter(n => n !== wvz);
                }
            }
        }
        ansqq.push(ansq);
    }
    ans = ansqq.map(x => String(x)).join("\n")
    // answer
    return ans;
}
// entrypoint
function entrypoint() {
    try {
        // linux
        let input = fs.readFileSync('/dev/stdin', 'utf8').trim().split("\n");
        console.debug = function () { };
        console.log(main(input));
    }
    catch (ex) {
        // windows
        const lines: string[] = [];
        const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
        reader.on('line', function (line: string) { lines.push(line); });
        reader.on('close', function () { let input = lines; console.log(main(input)); });
    }
}
entrypoint();
