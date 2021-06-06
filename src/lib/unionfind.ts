// union-find lib
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

// // usage
// let uf = new UnionFind();
// uf.initRoot(n);
// for (let mx = 0; mx < m; mx++) {
//     uf.mergeRoot(am[mx], bm[mx]);
// }
// ans = Math_max(uf.count);