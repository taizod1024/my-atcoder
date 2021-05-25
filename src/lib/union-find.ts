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
// usage
// UF_initRoot(n);
// for (let mx = 0; mx < m; mx++) {
//     UF_mergeRoot(am[mx], bm[mx]);
// }
// ans = Math_max(uf_count);