import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var k: number = 0;
    var ans: number = 0;
    // init
    k = Number(input.shift());
    // solve
    var gcd: number[][] = new Array(201);
    for (var kx0 = 1; kx0 <= k; kx0++) {
        gcd[kx0] = new Array(201);
        for (var kx1 = 0; kx1 <= k; kx1++) {
            gcd[kx0][kx1] = Math_gcdArray([kx0, kx1]);
        }
    }
    for (var kx0 = 1; kx0 <= k; kx0++) {
        for (var kx1 = 1; kx1 <= k; kx1++) {
            for (var kx2 = 1; kx2 <= k; kx2++) {
                ans += gcd[gcd[kx0][kx1]][kx2];
            }
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
    var f = (a: number, b: number): number => b ? f(b, a % b) : a
    for (var i = 1; i < values.length; i++) {
        ans = f(ans, values[i]);
    }
    return ans
};
function Math_gcdArray(values: number[]): number {
    var ans = values[0];
    var f = (a: number, b: number): number => b ? f(b, a % b) : a
    for (var i = 1; i < values.length; i++) {
        ans = f(ans, values[i]);
    }
    return ans
};
function Math_lcm(...values: number[]): number {
    var a = values
    var g = (n: number, m: number): number => m ? g(m, n % m) : n
    var l = (n: number, m: number): number => n * m / g(n, m)
    var ans = a[0]
    for (var i = 1; i < a.length; i++) {
        ans = l(ans, a[i])
    }
    return ans
}
function Math_lcmArray(values: number[]): number {
    var a = values
    var g = (n: number, m: number): number => m ? g(m, n % m) : n
    var l = (n: number, m: number): number => n * m / g(n, m)
    var ans = a[0]
    for (var i = 1; i < a.length; i++) {
        ans = l(ans, a[i])
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
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
