// input
import * as fs from "fs";
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line; })();
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
const charit = (function* () { while (true) { let word = wordit.next(); if (word.done) break; for (const char of String(word.value).split("")) yield char; } })();
const readline = () => String((lineit.next()).value);
const read = () => String((wordit.next()).value);
const readchar = () => String((charit.next()).value);

// standard template library
import * as tstl from "tstl";

// main
const main = function () {

    // param
    let l: number, q: number;
    let cq: number[] = [], xq: number[] = [];

    // init
    l = Number(read());
    q = Number(read());
    for (let qx = 0; qx < q; qx++) {
        cq.push(Number(read()));
        xq.push(Number(read()));
    }

    // // solve
    let ansn = [];
    let tree = new tstl.TreeSet<number>([0, l]);
    for (let qx = 0; qx < q; qx++) {
        if (cq[qx] == 1) {
            tree.insert(xq[qx]);
        } else {
            const it = tree.lower_bound(xq[qx]);
            ansn.push(it.value - it.prev().value);
        }
    }
    let ans = ansn.join("\n");

    // answer
    console.log(ans);

    return;

};
main();
