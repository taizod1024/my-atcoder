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
    let xn: number[];
    let yn: number[];

    // init
    n = Number(read());
    xn = [];
    yn = [];
    for (let nx = 0; nx < n; nx++) {
        xn[nx] = Number(read());
        yn[nx] = Number(read());
    }

    // solve
    let ans = 0;
    for (let nx = 0; nx < n; nx++) {
        for (let nxx = nx + 1; nxx < n; nxx++) {
            for (let nxxx = nxx + 1; nxxx < n; nxxx++) {
                if ((xn[nx] - xn[nxx]) * (yn[nxxx] - yn[nxx]) !== (xn[nxxx] - xn[nxx]) * (yn[nx] - yn[nxx])) {
                    ans++;
                }
            }
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
