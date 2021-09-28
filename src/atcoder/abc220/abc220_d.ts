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
    let an: number[];

    // init
    n = Number(read());
    an = [...Array(n)].map(val => Number(read()));

    // solve
    const MOD = 998244353;
    let dp: number[] = new Array(10).fill(0);
    for (let nx = 0; nx < n; nx++) {
        let x = an.shift();
        let y = an.shift();
        let dp0 = Array.from(dp);
        // WIP
    }
    let ans;

    // answer
    console.log(ans);

    return;

};
main();
