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
    let cn: bigint[];

    // init
    n = Number(read());
    cn = []
    for (let nx = 0; nx < n; nx++) cn[nx] = BigInt(read());

    // solve
    cn.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    let mul = 1n;
    let del = 0n;
    const M1097 = 10n ** 9n + 7n;
    for (let nx = 0; nx < n; nx++) {
        mul = (mul * (cn[nx] - del)) % M1097;
        del++;
    }
    let ans= mul.toString().replace("n", "");

    // answer
    console.log(ans);

    return;

};
main();
