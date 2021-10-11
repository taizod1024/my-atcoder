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
    let x: number;

    // init
    x = Number(read());

    // solve
    let px: number[] = [...Array(x + 1)].fill(0);
    px[0] = 1;
    for (let i = 0; i <= x; i++) {
        if (px[i] == 1) {
            if (i + 100 <= x) px[i + 100] = 1;
            if (i + 101 <= x) px[i + 101] = 1;
            if (i + 102 <= x) px[i + 102] = 1;
            if (i + 103 <= x) px[i + 103] = 1;
            if (i + 104 <= x) px[i + 104] = 1;
            if (i + 105 <= x) px[i + 105] = 1;
        }
    }
    let ans = px[x];

    // answer
    console.log(ans);

    return;

};
main();
