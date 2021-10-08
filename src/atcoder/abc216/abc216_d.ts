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
    let m: number;
    let km: number[];
    let amk: number[][];

    // init
    n = Number(read());
    m = Number(read());
    km = [];
    amk = [];
    for (let mx = 0; mx < m; mx++) {
        km[mx] = Number(read());
        amk[mx] = [...Array(km[mx])].map(() => Number(read()) - 1); // number to index
    }

    // solve
    let ans;

    // TODO WA グラフ解放では解けず

    // answer
    console.log(ans);

    return;

};
main();
