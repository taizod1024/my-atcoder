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

    // init
    n = Number(read());

    // solve
    let ans = 0;
    for (let a = 1; a * a * a <= n; a++) {
        for (let b = a; ; b++) {
            let c = Math.floor(n / a / b);
            if (b > c) break;
            ans += c - b + 1;
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
