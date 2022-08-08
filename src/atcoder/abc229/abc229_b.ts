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
    let a: string[];
    let b: string[];

    // init
    a = read().split("");
    b = read().split("");

    // solve
    let ans = "Easy";
    while (0 < a.length && 0 < b.length) {
        const aa = Number(a.pop());
        const bb = Number(b.pop());
        if (10 <= aa + bb) {
            ans = "Hard";
            break;
        }
    }

    // answer
    console.log(ans);

    return;
};
main();
