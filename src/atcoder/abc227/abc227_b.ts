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

    // TODO edit the code

    // param
    let n: number;
    let sn: number[];

    // init
    n = Number(read());
    sn = [...Array(n)].map(() => Number(read()));

    // solve
    let smax = sn.reduce((a, b) => Math.max(a, b));
    let sok = [];
    loop:
    for (let a = 1; ; a++) {
        for (let b = 1; ; b++) {
            let s = 4 * a * b + 3 * a + 3 * b;
            if (smax < s) {
                if (b == 1) break loop;
                break;
            }
            sok.push(s);
        }
    }
    let ans = sn.filter(val => 0 > sok.indexOf(val)).length;

    // answer
    console.log(ans);

    return;

};
main();
