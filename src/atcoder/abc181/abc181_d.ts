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

    // string to number array
    const strtonumarr = (s: string): number[] => {
        let sd = new Array(10).fill(0);
        s.split("").map(val => Number(val)).forEach(val => sd[val]++);
        return sd;
    }

    ans = "No";
    if (s.length <= 2) {
        if (Number(s) % 8 == 0) ans = "Yes";
        else if (Number(s.split("").reverse().join("")) % 8 == 0) ans = "Yes";
    } else {
        // 以下の判定方法は3桁以上のときのみ（s=132のときmx=32でYesになってしまう）
        let sd = strtonumarr(s);
        mx: for (let mx = 112; mx < 1000; mx += 8) {
            let td = strtonumarr(String(mx));
            if (0 < td[0]) continue mx;
            for (let dx = 1; dx < td.length; dx++) {
                if (sd[dx] < td[dx]) continue mx;
            }
            ans = "Yes";
            break mx;
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
