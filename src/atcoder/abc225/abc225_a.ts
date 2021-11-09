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
    let s: string;
    
    // init
    s = read();

    // solve
    let ans;
    let sn = s.split("");
    if (s[0] == s[1] && s[1] == s[2]) ans = 1;
    else if (s[0] != s[1] && s[1] != s[2] && s[2] != s[0]) ans = 6;
    else ans = 3;
    
    // answer
    console.log(ans);

    return;

};
main();
