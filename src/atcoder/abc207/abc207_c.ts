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
    let tlrn: number[][];

    // init
    n = Number(read());
    tlrn = [...Array(n)].map(val => [Number(read()), Number(read()), Number(read())]);

    // solve
    for (let nx = 0; nx < n; nx++) {
        if (tlrn[nx][0] == 2 || tlrn[nx][0] == 4) tlrn[nx][2] -= 0.1;
        if (tlrn[nx][0] == 3 || tlrn[nx][0] == 4) tlrn[nx][1] += 0.1;
    }
    let ans = 0;
    for (let nx = 0; nx < n; nx++) {
        for (let nxx = nx + 1; nxx < n; nxx++) {
            if (tlrn[nx][2] < tlrn[nxx][1]) continue;
            if (tlrn[nxx][2] < tlrn[nx][1]) continue;
            ans++;
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
