import * as fs from "fs";

// util for input
// prettier-ignore
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line.trim(); })();
// prettier-ignore
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
// prettier-ignore
const read = () => String((wordit.next()).value);

// main
const main = function () {
    // param
    let n: number = Number(read());

    // solve
    let num = n < 42 ? n : n + 1;
    let ans = `AGC${String(num).padStart(3, "0")}`;

    // answer
    console.log(ans);

    return;
};
main();
