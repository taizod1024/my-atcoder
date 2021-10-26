import * as fs from "fs";

// util for input
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line.trim(); })();
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
const charit = (function* () { while (true) { let word = wordit.next(); if (word.done) break; for (const char of String(word.value).split("")) yield char; } })();
const readline = () => String((lineit.next()).value);
const read = () => String((wordit.next()).value);
const readchar = () => String((charit.next()).value);

/** math gcd array */
const MathGCDArray = (values: number[]): number => {
    let f = (a: number, b: number): number => b ? f(b, a % b) : a
    let ans = values.reduce((pval, cval) => f(pval, cval));
    return ans
};

// main
const main = function () {

    // param
    let n: number;
    let x: number;
    let xn: number[];

    // init
    n = Number(read());
    x = Number(read());
    xn = [...Array(n)].map(() => Number(read()));

    // solve
    xn = xn.map(xi => Math.abs(xi - x));
    let ans = MathGCDArray(xn);

    // answer
    console.log(ans);

    return;

};
main();
