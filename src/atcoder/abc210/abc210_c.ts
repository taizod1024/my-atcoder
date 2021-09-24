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
    let n: number, k: number;
    let cn: number[];

    // init
    n = Number(read());
    k = Number(read());
    cn = readline().split(" ").map(val => Number(val));

    // solve
    let arr = [];
    let now = 0;
    let max = 0;
    for (let nx = 0; nx < n; nx++) {
        if (arr[cn[nx]] == undefined) arr[cn[nx]] = 0;
        if (arr[cn[nx]] == 0) now++;
        arr[cn[nx]]++;
        if (k <= nx) {
            arr[cn[nx - k]]--;
            if (arr[cn[nx - k]] == 0) now--;
        }
        max = Math.max(max, now);
    }
    let ans = max;

    // answer
    console.log(ans);

    return;

};
main();
