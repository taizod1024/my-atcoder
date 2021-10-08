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
    let gn = [...Array(n)].map(() => []); // graph
    for (const am of amk) {
        let a_from = -1;
        for (const a_to of am) {
            if (0 <= a_from && gn[a_from].indexOf(a_to) < 0) gn[a_from].push(a_to);
            a_from = a_to;
        }
    }
    let ans = "Yes";
    let dn = [...Array(n)].fill(0); // distance
    loop:
    for (let nx = 0; nx < n; nx++) {
        if (dn[nx] == 0) {
            let qn = [nx];
            dn[nx] = 1;
            for (const nxx of qn) {
                for (const nxxx of gn[nxx]) {
                    if (dn[nxxx] == 1) {
                        ans = "No";
                        break loop;
                    }
                    if (dn[nxxx] == 0) {
                        dn[nxxx] = 1;
                        qn.push(nxxx);
                    }
                }
            }
        }
    }

    // TODO WA

    // answer
    console.log(ans);

    return;

};
main();
