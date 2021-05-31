export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readiter = readline[Symbol.asyncIterator]();
    async function read() { return (await readiter.next()).value; }
    // param
    let h: number, w: number;
    let q: number;
    let qqn: number[][];
    // init
    [h, w] = (await read()).split(" ").map(x => Number(x));
    q = Number(await read());
    qqn = [];
    for (let qx = 0; qx < q; qx++) {
        qqn.push((await read()).split(" ").map(x => Number(x) - 1));
    }
    // union-find lib
    let uf_root: number[];
    let uf_count: number[];
    function UF_initRoot(num: number) {
        uf_root = new Array(num).fill(-1);
        uf_count = new Array(num).fill(1);
    }
    function UF_getRoot(index: number) {
        if (uf_root[index] < 0) {
            return index;
        } else {
            let work0: number = UF_getRoot(uf_root[index]);
            uf_root[index] = work0;
            return work0
        }
    }
    function UF_mergeRoot(a: number, b: number) {
        let root0: number = UF_getRoot(a);
        let root1: number = UF_getRoot(b);
        if (root0 == root1) return;
        if (root0 > root1) [root0, root1] = [root1, root0];
        uf_count[root0] += uf_count[root1];
        uf_count[root1] = 0;
        uf_root[root1] = root0;
    }
    // graph matrix lib
    let GM_h: number;
    let GM_w: number;
    let GM_hw: number[][];
    let GM_initMatrix = (h, w) => { GM_h = h; GM_w = w; GM_hw = new Array(h).fill(null).map(x => new Array(w).fill(-1)); };
    let GM_getValue = (p) => GM_hw[p[0]][p[1]];
    let GM_setValue = (p, v) => { GM_hw[p[0]][p[1]] = v };
    let GM_isEqualTo = (p1, p2) => p1[0] == p2[0] && p1[1] == p2[1];
    let GM_addTo = (p, v) => [p[0] + v[0], p[1] + v[1]];
    let GM_checkRange = (p) => 0 <= p[0] && p[0] < GM_h && 0 <= p[1] && p[1] < GM_w;
    // solve
    GM_initMatrix(h, w);
    UF_initRoot(q);
    for (let qx = 0; qx < q; qx++) {
        let pbgn = qqn[qx].slice(1, 3);
        let pend = qqn[qx].slice(3);
        if (qqn[qx][0] == 0) {
            if (GM_getValue(pbgn) == -1) {
                GM_setValue(pbgn, qx);
                [[-1, 0], [+1, 0], [0, -1], [0, +1]].forEach((vnext) => {
                    let pnext = GM_addTo(pbgn, vnext);
                    if (GM_checkRange(pnext)) {
                        let gnext = GM_getValue(pnext);
                        if (gnext != -1) {
                            UF_mergeRoot(qx, GM_getValue(pnext));
                        }
                    }
                });
            }
        } else {
            let gbgn = GM_getValue(pbgn);
            if (gbgn == -1) {
                console.log("No");
                continue;
            }
            let gend = GM_getValue(pend);
            if (gend == -1) {
                console.log("No");
                continue;
            }
            if (UF_getRoot(gbgn) != UF_getRoot(gend)) {
                console.log("No");
                continue;
            }
            console.log("Yes");
        }
    }
    // answer
    return;
}
main();
