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
    let abn: number[][];

    // init
    n = Number(read());
    abn = [...Array(n)].map(() => [Number(read()), Number(read())]);

    // solve
    let cn = abn.map(ab => [ab[0], 1]).concat(abn.map(ab => [ab[0] + ab[1], -1]));
    cn.sort((a, b) => a[0] - b[0]);
    let dc = [...Array(n + 1)].fill(0);
    let c = 0;
    for (let nx = 0; nx < cn.length - 1; nx++) {
        c += cn[nx][1];
        dc[c] += cn[nx + 1][0] - cn[nx][0];
    }
    let ans = dc.slice(1).join(" ");

    // answer
    console.log(ans);

    return;

};
main();
