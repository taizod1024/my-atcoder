import * as fs from "fs";

// util for input
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line; })();
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
const charit = (function* () { while (true) { let word = wordit.next(); if (word.done) break; for (const char of String(word.value).split("")) yield char; } })();
const readline = () => String((lineit.next()).value);
const read = () => String((wordit.next()).value);
const readchar = () => String((charit.next()).value);

// main
const main = function () {

    // param
    let n: number;
    let k: number;
    let m: number;
    let an: number[];

    // init
    n = Number(read());
    k = Number(read());
    m = Number(read());
    an = [...Array(n - 1)].map(() => Number(read()));

    // solve
    let asum = an.reduce((pval, cval) => pval + cval);
    let aavg = m * n;
    let ans;
    if (asum + k < aavg) ans = -1;
    else if (aavg < asum) ans = 0;
    else ans = aavg - asum;

    // answer
    console.log(ans);

    return;

};
main();
