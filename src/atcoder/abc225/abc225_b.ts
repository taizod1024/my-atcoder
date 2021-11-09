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
        an[nx] = Number(read()) - 1;
        bn[nx] = Number(read()) - 1;
    }

    // solve
    let nn = [...Array(n)].fill(0);
    for (let nx = 0; nx < n; nx++) {
        nn[an[nx]]++;
        nn[bn[nx]]++;
    }
    let ans = "Yes";
    for (let nx = 0; nx < n; nx++) {
        if (nn[nx] == 1) continue;
        if (nn[nx] == n - 1) continue;
        ans = "No";
        break;
    }

    // answer
    console.log(ans);

    return;

};
main();
