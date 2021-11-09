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
    let an: number[];
    let bn: number[];

    // init
    n = Number(read());
    an = [];
    bn = [];
    for (let nx = 0; nx < n; nx++) {
        an[nx] = Number(read());
        bn[nx] = Number(read());
    }

    // solve
    let tm = 0;
    for (let nx = 0; nx < n; nx++) {
        tm += an[nx] / bn[nx];
    }
    tm /= 2;
    let ans = 0;
    for (let nx = 0; nx < n; nx++) {
        let t = an[nx] / bn[nx];
        if (tm > t) {
            tm -= t;
            ans += an[nx];
        } else {
            ans += an[nx] * tm / t;
            break;
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
