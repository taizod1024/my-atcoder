export {};
// main
function main(input: string[]) {
    // param
    var n: number;
    var an: number[];
    var ans;
    // init
    n = Number(input[0])
    an = input[1].split(" ").map(x => Number(x));
    // solve
    if (Math_gcdArray(an) != 1) {
        ans = "not coprime";
    } else {
        var c = new Array(Math_max(an) + 1).fill(0);
        for (var ax = 0; ax < an.length; ax++) {
            c[an[ax]] = 1;
        }
        var p = new Array(Math_max(an) + 1).fill(0);
        var cnt = 0;
        for (var px = 2; px < p.length; px++) {
            if (p[px] == 0) {
                for (var pxx = px; pxx < p.length; pxx += px) {
                    p[pxx] = px;
                }
                cnt = 0;
                for (var pxx = px; pxx < p.length; pxx += px) {
                    cnt += c[pxx];
                }
                if (2 <= cnt) break;
            }
        }
        if (2 <= cnt) {
            ans = "setwise coprime"
        } else {
            ans = "pairwise coprime"
        }
    }
    // answer
    return ans;
}
// math lib
function Math_max(arr: number[]): number { return arr.reduce((x, y) => Math.max(x, y)); }
function Math_min(arr: number[]): number { return arr.reduce((x, y) => Math.min(x, y)); }
function Math_gcd(...values: number[]): number {
    var ans = values[0];
    var f = (an: number, b: number): number => b ? f(b, an % b) : an
    for (var i = 1; i < values.length; i++) {
        ans = f(ans, values[i]);
    }
    return ans
};
function Math_gcdArray(values: number[]): number {
    var ans = values[0];
    var f = (an: number, b: number): number => b ? f(b, an % b) : an
    for (var i = 1; i < values.length; i++) {
        ans = f(ans, values[i]);
    }
    return ans
};
function Math_lcm(...values: number[]): number {
    var an = values
    var g = (n: number, m: number): number => m ? g(m, n % m) : n
    var l = (n: number, m: number): number => n * m / g(n, m)
    var ans = an[0]
    for (var i = 1; i < an.length; i++) {
        ans = l(ans, an[i])
    }
    return ans
}
function Math_lcmArray(values: number[]): number {
    var an = values
    var g = (n: number, m: number): number => m ? g(m, n % m) : n
    var l = (n: number, m: number): number => n * m / g(n, m)
    var ans = an[0]
    for (var i = 1; i < an.length; i++) {
        ans = l(ans, an[i])
    }
    return ans
}
function Math_primeList(value: number): number[] {
    var ans = [];
    var arr = new Array(value).fill(0);
    for (var i = 2; i < value; i++) {
        if (arr[i] == 0) {
            for (var j = i; j < value; j += i) {
                if (arr[j] == 0) arr[j] = i;
            }
        }
    }
    for (var i = 2; i < value; i++) {
        if (arr[i] == i) ans.push(i);
    }
    return ans;
}
function Math_primeFactor(p: number[], value: number): number[][] {
    var ans: number[][] = [];
    var valmax = value / 2;;
    for (var i = 0; i < p.length; i++) {
        var prime = p[i];
        if (valmax < prime) break;
        var count = 0;
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
var g_uf_root: number[];
var g_uf_count: number[];
function UF_initRoot(num: number) {
    g_uf_root = new Array(num).fill(-1);
    g_uf_count = new Array(num).fill(1);
}
function UF_getRoot(index: number) {
    if (g_uf_root[index] < 0) {
        return index;
    } else {
        var work0: number = UF_getRoot(g_uf_root[index]);
        g_uf_root[index] = work0;
        return work0
    }
}
function UF_mergeRoot(an: number, b: number) {
    var root0: number = UF_getRoot(an);
    var root1: number = UF_getRoot(b);
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
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
