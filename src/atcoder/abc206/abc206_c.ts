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
    let an: number[];

    // init
    n = Number(read());
    an = [...Array(n)].map(val => Number(read()));

    // solve
    let ans = n * (n - 1) / 2;
    an.sort((a, b) => a - b);
    let cnt = 0;
    for (let nx = 0; nx <= n; nx++) {
        if (nx == n || (nx != 0 && an[nx - 1] != an[nx])) {
            ans -= cnt * (cnt - 1) / 2;
            cnt = 1;
        } else {
            cnt++;
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
