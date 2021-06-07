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

// // usage
// let gm = new GraphMatrix();
// gm.initMatrix(h, w);
// for (let qx = 0; qx < q; qx++) {
//     let pbgn = qqn[qx].slice(1, 3);
//     let pend = qqn[qx].slice(3);
//     if (qqn[qx][0] == 0) {
//         if (gm.getValue(pbgn) == -1) {
//             gm.setValue(pbgn, qx);
//             [[-1, 0], [+1, 0], [0, -1], [0, +1]].forEach((vnext) => {
//                 let pnext = gm.addTo(pbgn, vnext);
//                 if (gm.checkRange(pnext)) {
//                     let gnext = gm.getValue(pnext);
//                     if (gnext != -1) {
//                         UF_mergeRoot(qx, gm.getValue(pnext));
//                     }
//                 }
//             });
