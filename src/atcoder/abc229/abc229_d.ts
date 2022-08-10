import * as fs from "fs";

// util for input
const lineit = (function* () {
    for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line.trim();
})();
const wordit = (function* () {
    while (true) {
        let line = lineit.next();
        if (line.done) break;
        for (const word of String(line.value).split(" ")) yield word;
    }
})();
const charit = (function* () {
    while (true) {
        let word = wordit.next();
        if (word.done) break;
        for (const char of String(word.value).split("")) yield char;
    }
})();
const readline = () => String(lineit.next().value);
const read = () => String(wordit.next().value);
const readchar = () => String(charit.next().value);

// main
const main = function () {
    // param
    let sn: string[];
    let k: number;

    // init
    sn = read().split("");
    k = Number(read());

    // solve
    let ans = 0;
    let n = sn.length;
    let left = 0;
    let nx = 0;
    let tm = [];
    while (nx <= n) {
        while (nx < n && sn[nx] === "X") nx++;
        ans = Math.max(ans, nx - left);
        nx++;
        tm.push(nx);
        if (k < tm.length) {
            left = tm.shift();
        }
    }

    // answer
    console.log(ans);

    return;
};
main();
