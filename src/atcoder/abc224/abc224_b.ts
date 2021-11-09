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
    let h: number;
    let w: number;
    let ahw: number[][];

    // init
    h = Number(read());
    w = Number(read());
    ahw = [...Array(h)].map(() => [...Array(w)].map(() => Number(read())));

    // solve
    let ans = "Yes";
    for (let hx = 0; hx < h; hx++) {
        for (let wx = 0; wx < w; wx++) {
            for (let hxx = hx; hxx < h; hxx++) {
                for (let wxx = wx; wxx < w; wxx++) {
                    if (ahw[hx][wx] + ahw[hxx][wxx] <= ahw[hx][wxx] + ahw[hxx][wx]) continue;
                    ans = "No";
                    break;
                }
            }
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
