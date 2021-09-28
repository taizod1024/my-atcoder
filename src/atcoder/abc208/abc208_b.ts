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
    let p: number;

    // init
    p = Number(read());

    // solve
    let pz = p;
    let cn = new Array(10).fill(0);
    cn.forEach((val, idx, arr) => {
        arr[idx] = (idx == 0) ? 1 : arr[idx - 1] * (idx + 1); 
    });
    let ans = 0;
    for (let nx = cn.length - 1; 0 <= nx; nx--) {
        for (let mx = 0; mx < 100; mx++) {
            if (pz < cn[nx]) break;
            pz -= cn[nx];
            ans++;
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
