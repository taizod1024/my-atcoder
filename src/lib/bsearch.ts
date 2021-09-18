// bsearch
const bsearch = function (arr: any[], val: any, compare_fn: (a: any, b: any, arr: any[], bidx: number) => number) {
    let lidx = 0;
    let ridx = arr.length - 1;
    while (lidx <= ridx) {
        let bidx = (ridx + lidx) >> 1;
        let cmp = compare_fn(val, arr[bidx], arr, bidx);
        if (cmp > 0) { lidx = bidx + 1; continue; }
        if (cmp < 0) { ridx = bidx - 1; continue; }
        return bidx;
    }
    return -1;
}
const compare_num_of_pair = function (a: number[], b: number[]) {
    return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1];
}
const compare_current_and_next = function (a: number, b: number, arr: any[] = null, bidx: number = 0) {
    if (a < b) return -1;
    if (a < arr[bidx + 1]) return 0;
    return 1;
}
