export {};
// main
function main(input: string[]) {
    // param
    let n: number;
    let m: number;
    let am: number[] = [];
    let bm: number[] = [];
    let ans;
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    for (let mx = 0; mx < m; mx++) {
        [am[mx], bm[mx]] = input[mx].split(" ").map(x => Number(x) - 1);
    }
    // solve
    UF_initRoot(n);
    for (let mx = 0; mx < m; mx++) {
        UF_mergeRoot(am[mx], bm[mx]);
    }
    ans = Math_max(g_uf_count);
    // answer
    console.log(ans);
}
// math lib
function Math_max(arr: number[]): number { return arr.reduce((x, y) => Math.max(x, y)); }
function Math_min(arr: number[]): number { return arr.reduce((x, y) => Math.min(x, y)); }
function Math_gcd(...values: number[]): number {
    let ans = values[0];
    let f = (a: number, b: number): number => b ? f(b, a % b) : a
    for (let i = 1; i < values.length; i++) {
        ans = f(ans, values[i]);
    }
    return ans
};
function Math_gcdArray(values: number[]): number {
    let ans = values[0];
    let f = (a: number, b: number): number => b ? f(b, a % b) : a
    for (let i = 1; i < values.length; i++) {
        ans = f(ans, values[i]);
    }
    return ans
};
function Math_lcm(...values: number[]): number {
    let a = values
    let g = (n: number, m: number): number => m ? g(m, n % m) : n
    let l = (n: number, m: number): number => n * m / g(n, m)
    let ans = a[0]
    for (let i = 1; i < a.length; i++) {
        ans = l(ans, a[i])
    }
    return ans
}
function Math_lcmArray(values: number[]): number {
    let a = values
    let g = (n: number, m: number): number => m ? g(m, n % m) : n
    let l = (n: number, m: number): number => n * m / g(n, m)
    let ans = a[0]
    for (let i = 1; i < a.length; i++) {
        ans = l(ans, a[i])
    }
    return ans
}
function Math_primeList(value: number): number[] {
    let ans = [];
    let arr = new Array(value).fill(0);
    for (let i = 2; i < value; i++) {
        if (arr[i] == 0) {
            for (let j = i; j < value; j += i) {
                if (arr[j] == 0) arr[j] = i;
            }
        }
    }
    for (let i = 2; i < value; i++) {
        if (arr[i] == i) ans.push(i);
    }
    return ans;
}
function Math_primeFactor(p: number[], value: number): number[][] {
    let ans: number[][] = [];
    let valmax = value / 2;;
    for (let i = 0; i < p.length; i++) {
        let prime = p[i];
        if (valmax < prime) break;
        let count = 0;
        while (value % prime == 0) {
            value /= prime;
            count++;
        }
        if (count != 0) {
            ans.push([prime, count]);
        }
        if (value == 1) break;
    }
    return ans;
}
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
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
