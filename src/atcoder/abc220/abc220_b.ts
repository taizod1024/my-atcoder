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
    let k: number;
    let ak: string;
    let bk: string;

    // init
    k = Number(read());
    ak = read();
    bk = read();

    // solve
    let a0 = 0, b0 = 0;
    for (const d of ak.split("")) a0 = a0 * k + Number(d);
    for (const d of bk.split("")) b0 = b0 * k + Number(d);
    let ans = a0 * b0;

    // answer
    console.log(ans);

    return;

};
main();
