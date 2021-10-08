import * as fs from "fs";

// util for input
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line.trim(); })();
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
    let am: number[];
    let bm: number[];

    // init
    n = Number(read());
    m = Number(read());
    am = [];
    bm = [];
    for (let mx = 0; mx < m; mx++) {
        am.push(Number(read()) - 1); // number to index
        bm.push(Number(read()) - 1); // number to index
    }

    // solve
    const M1097 = 10 ** 9 + 7; // mod
    let gn = [...Array(n)].map(() => []);   // graph
    for (let mx = 0; mx < m; mx++) {
        gn[am[mx]].push(bm[mx]);
        gn[bm[mx]].push(am[mx]);
    }
    let dn = [...Array(n)].fill(0); // distance
    let pn = [...Array(n)].fill(0); // path
    dn[0] = 0;
    pn[0] = 1;
    let qn = [0]; // queue
    for (const nx of qn) {
        for (const nxx of gn[nx]) {
            // first pass
            if (dn[nxx] == 0) {
                dn[nxx] = dn[nx] + 1;
                pn[nxx] = pn[nx];
                qn.push(nxx);
            }
            // next pass 
            else if (dn[nxx] == dn[nx] + 1) {
                pn[nxx] = (pn[nxx] + pn[nx]) % M1097;
            }
        }
    }

    let ans = pn[n - 1];

    // answer
    console.log(ans);

    return;

};
main();
