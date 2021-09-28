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
    let n: bigint;
    let k: bigint;
    let an: bigint[];

    // init
    n = BigInt(read());
    k = BigInt(read());
    an = [...Array(Number(n))].map(val => BigInt(read()));

    // solve
    let d = (k >= n) ? BigInt(k / n) : 0;
    k = k % n;
    let bn = an.map((val, idx) => [val, d, idx]);
    bn.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
    for (let nx = 0; nx < k; nx++) {
        bn[nx][1]++;
    }
    bn.sort((a, b) => a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0);
    let ans = bn.map(val => val[1].toString()).join("\n").replace("n", "");

    // answer
    console.log(ans);

    return;

};
main();
