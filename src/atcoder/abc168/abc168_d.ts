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
        am[mx] = Number(read()) - 1; // adjust index
        bm[mx] = Number(read()) - 1; // adjust index
    }

    // solve
    let sn = [...Array(n)].fill(null).map(val => []);
    let tn = [...Array(n)].fill(-1);
    for (let mx = 0; mx < m; mx++) {
        sn[am[mx]].push(bm[mx]);
        sn[bm[mx]].push(am[mx]);
    }
    let un = [0];
    tn[0] = 0
    let nx = 0;
    while (nx < tn.length) {
        let nxx = un[nx];
        for (let nxxx of sn[nxx]) {
            if (tn[nxxx] == -1) {
                tn[nxxx] = nxx;
                un.push(nxxx);
            }
        }
        nx++;
    }
    let ans = "No";
    if (n == nx) {
        ans = "Yes";
        for (let nxx = 1; nxx < n; nxx++) {
            ans += "\n" + (tn[nxx] + 1); // adjust index
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
