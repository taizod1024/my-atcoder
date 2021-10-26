// mathx lib

/** math max */
const MathMax = (arr: number[]): number => { return arr.reduce((x, y) => Math.max(x, y)); }

/** max min */
const MathMin = (arr: number[]): number => { return arr.reduce((x, y) => Math.min(x, y)); }

/** math gcd */
const MathGCD = (...values: number[]): number => {
    let f = (a: number, b: number): number => b ? f(b, a % b) : a
    let ans = values.reduce((pval, cval) => f(pval, cval));
    return ans
};

/** math gcd array */
const MathGCDArray = (values: number[]): number => {
    let f = (a: number, b: number): number => b ? f(b, a % b) : a
    let ans = values.reduce((pval, cval) => f(pval, cval));
    return ans
};

/** math lcm */
const MathLCM = (...values: number[]): number => {
    let g = (n: number, m: number): number => m ? g(m, n % m) : n;
    let l = (n: number, m: number): number => n * m / g(n, m);
    let ans = values.reduce((pval, cval) => l(pval, cval));
    return ans
};

/** math lcm array */
const MathLCMArray = (values: number[]): number => {
    let g = (n: number, m: number): number => m ? g(m, n % m) : n;
    let l = (n: number, m: number): number => n * m / g(n, m);
    let ans = values.reduce((pval, cval) => l(pval, cval));
    return ans
};

/** math prime list */
const MathPrimeList = (value: number): number[] => {
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

/** math prime list */
const MathPrimeFactor = (value: number, pl: number[] = null): number[][] => {
    let ans: number[][] = [];
    let valmax = value / 2;
    if (pl == null) pl = this.primeList(valmax);
    for (let i = 0; i < pl.length; i++) {
        let prime = pl[i];
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