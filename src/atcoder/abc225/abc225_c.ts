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
    let bnm: number[][];

    // init
    n = Number(read());
    m = Number(read());
    bnm = [...Array(n)].map(() => [...Array(m)].map(() => Number(read())));

    // solve
    let ans = "Yes";
    if (Math.ceil(bnm[0][0] / 7) != Math.ceil(bnm[0][m - 1] / 7)) {
        ans = "No";
    } else {
        loop:
        for (let nx = 0; nx < n; nx++) {
            for (let mx = 0; mx < m; mx++) {
                if (0 < nx) {
                    if (bnm[nx - 1][mx] + 7 != bnm[nx][mx]) {
                        ans = "No";
                        break loop;
                    }
                }
                if (0 < mx) {
                    if (bnm[nx][mx - 1] + 1 != bnm[nx][mx]) {
                        ans = "No";
                        break loop;
                    }
                }
            }
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
