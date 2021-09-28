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
    let an: bigint[];
    let x: bigint;

    // init
    n = Number(read());
    an = [...Array(n)].map(val => BigInt(read()));
    x = BigInt(read());

    // solve
    let asum = an.reduce((pval, cval) => pval + cval);
    let rep = (x - x % asum) / asum;
    let cnt = BigInt(an.length) * rep;
    let sum = asum * rep;
    for (let nx = 0; nx < n; nx++) {
        if (x < sum) break;
        sum += an[nx];
        cnt++;
    }
    let ans = cnt.toString().replace("n", "");

    // answer
    console.log(ans);

    return;

};
main();
