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
    let psm: any[][];

    // init
    n = Number(read());
    m = Number(read());
    psm = [...Array(m)].map(() => [Number(read()), read().trim()]);

    // solve
    let ac = 0;
    let wa = 0;
    let tmp = [];
    for (let mx = 0; mx < m; mx++) {
        if (tmp[psm[mx][0]] === undefined) {
            if (psm[mx][1] == "AC") tmp[psm[mx][0]] = 0;
        }
    }
    for (let mx = 0; mx < m; mx++) {
        if (tmp[psm[mx][0]] === 0) {
            if (psm[mx][1] == "AC") { tmp[psm[mx][0]] = 1; ac++; }
            else wa++;
        }
    }

    // answer
    console.log(ac, wa);

    return;

};
main();
