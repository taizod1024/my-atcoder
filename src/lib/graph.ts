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

// // usage
// GM_initMatrix(h, w);
// for (let qx = 0; qx < q; qx++) {
//     let pbgn = qqn[qx].slice(1, 3);
//     let pend = qqn[qx].slice(3);
//     if (qqn[qx][0] == 0) {
//         if (GM_getValue(pbgn) == -1) {
//             GM_setValue(pbgn, qx);
//             [[-1, 0], [+1, 0], [0, -1], [0, +1]].forEach((vnext) => {
//                 let pnext = GM_addTo(pbgn, vnext);
//                 if (GM_checkRange(pnext)) {
//                     let gnext = GM_getValue(pnext);
//                     if (gnext != -1) {
//                         UF_mergeRoot(qx, GM_getValue(pnext));
//                     }
//                 }
//             });
