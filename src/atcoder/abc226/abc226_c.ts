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
    let tn: number[];
    let kn: number[];
    let ank: number[][];

    // init
    n = Number(read());
    tn = [];
    kn = [];
    ank = [];
    for (let nx = 0; nx < n; nx++) {
        tn[nx] = Number(read());
        kn[nx] = Number(read());
        ank[nx] = [];
        for (let kx = 0; kx < kn[nx]; kx++) {
            ank[nx][kx] = Number(read()) - 1; // to zero base
        }
    }

    // solve
    let sum = 0n;
    let rest = [...Array(n)].fill(true);
    let queue = [];
    rest[n - 1] = false;
    queue.push(n - 1);
    while (queue.length) {
        let nx = queue.pop();
        sum += BigInt(tn[nx]);
        for (let kx = 0; kx < kn[nx]; kx++) {
            let nxx = ank[nx][kx];
            if (rest[nxx]) {
                rest[nxx] = false;
                queue.push(nxx);
            }
        }
    }
    let ans = sum.toString().replace("n", "");

    // answer
    console.log(ans);

    return;

};
main();
