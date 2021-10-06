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
    let tn: number[];

    // init
    n = Number(read());
    tn = [...Array(n)].map(() => Number(read()));

    // solve
    tn.sort((a, b) => b - a);
    let am = [0, 0];
    for (let nx = 0; nx < n; nx++) {
        if (am[0] < am[1]) {
            am[0] += tn[nx];
        } else {
            am[1] += tn[nx];
        }
    }
    let ans = (am[0] > am[1]) ? am[0] : am[1];

    // TODO WA
    
    // answer
    console.log(ans);

    return;

};
main();
