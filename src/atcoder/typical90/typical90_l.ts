export { };
// union find lib
class UnionFind {
    public root: number[];
    public count: number[];
    public initRoot(num: number) {
        this.root = new Array(num).fill(-1);
        this.count = new Array(num).fill(1);
    };
    public getRoot(index: number) {
        if (this.root[index] < 0) {
            return index;
        } else {
            let work0: number = this.getRoot(this.root[index]);
            this.root[index] = work0;
            return work0
        }
    }
    public mergeRoot(a: number, b: number) {
        let root0: number = this.getRoot(a);
        let root1: number = this.getRoot(b);
        if (root0 == root1) return;
        if (root0 > root1) [root0, root1] = [root1, root0];
        this.count[root0] += this.count[root1];
        this.count[root1] = 0;
        this.root[root1] = root0;
    }
};
// graph matrix lib
class GraphMatrix {
    public h: number;
    public w: number;
    public hw: number[][];
    public initMatrix = (h, w) => { this.h = h; this.w = w; this.hw = new Array(h).fill(null).map(x => new Array(w).fill(-1)); };
    public getValue = (p) => this.hw[p[0]][p[1]];
    public setValue = (p, v) => { this.hw[p[0]][p[1]] = v };
    public isEqualTo = (p1, p2) => p1[0] == p2[0] && p1[1] == p2[1];
    public addTo = (p, v) => [p[0] + v[0], p[1] + v[1]];
    public checkRange = (p) => 0 <= p[0] && p[0] < this.h && 0 <= p[1] && p[1] < this.w;
}
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const worditer = readline[Symbol.asyncIterator]();
    async function read() { return (await worditer.next()).value; }
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
    // solve
    let gm = new GraphMatrix();
    let uf = new UnionFind();
    gm.initMatrix(h, w);
    uf.initRoot(q);
    for (let qx = 0; qx < q; qx++) {
        let pbgn = qqn[qx].slice(1, 3);
        let pend = qqn[qx].slice(3);
        if (qqn[qx][0] == 0) {
            if (gm.getValue(pbgn) == -1) {
                gm.setValue(pbgn, qx);
                [[-1, 0], [+1, 0], [0, -1], [0, +1]].forEach((vnext) => {
                    let pnext = gm.addTo(pbgn, vnext);
                    if (gm.checkRange(pnext)) {
                        let gnext = gm.getValue(pnext);
                        if (gnext != -1) {
                            uf.mergeRoot(qx, gm.getValue(pnext));
                        }
                    }
                });
            }
        } else {
            let gbgn = gm.getValue(pbgn);
            if (gbgn == -1) {
                console.log("No");
                continue;
            }
            let gend = gm.getValue(pend);
            if (gend == -1) {
                console.log("No");
                continue;
            }
            if (uf.getRoot(gbgn) != uf.getRoot(gend)) {
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
