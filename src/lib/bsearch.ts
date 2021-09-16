// bsearch
const bsearch = function (arr: any[], val: any, compare_fn: (a: any, b: any) => number) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let center = (right + left) >> 1;
        let cmp = compare_fn(val, arr[center]);
        if (cmp > 0) {
            left = center + 1;
        } else if (cmp < 0) {
            right = center - 1;
        } else {
            return center;
        }
    }
    return -1;
}
const compare = function (a: number[], b: number[]) {
    return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1];
}
