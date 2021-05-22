// union-find lib
let g_uf_root: number[];
let g_uf_count: number[];
function UF_initRoot(num: number) {
    g_uf_root = new Array(num).fill(-1);
    g_uf_count = new Array(num).fill(1);
}
function UF_getRoot(index: number) {
    if (g_uf_root[index] < 0) {
        return index;
    } else {
        let work0: number = UF_getRoot(g_uf_root[index]);
        g_uf_root[index] = work0;
        return work0
    }
}
function UF_mergeRoot(a: number, b: number) {
    let root0: number = UF_getRoot(a);
    let root1: number = UF_getRoot(b);
    if (root0 == root1) return;
    if (root0 > root1) [root0, root1] = [root1, root0];
    g_uf_count[root0] += g_uf_count[root1];
    g_uf_count[root1] = 0;
    g_uf_root[root1] = root0;
}
