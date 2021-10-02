import * as fs from "fs";

// util for input
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line; })();
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
const charit = (function* () { while (true) { let word = wordit.next(); if (word.done) break; for (const char of String(word.value).split("")) yield char; } })();
const readline = () => String((lineit.next()).value);
const read = () => String((wordit.next()).value);
const readchar = () => String((charit.next()).value);

// mathx lib
class Mathx {
    public static getPrimeList(value: number): number[] {
        let ans = [];
        let arr = new Array(value).fill(0);
        for (let i = 2; i < value; i++) {
            if (arr[i] == 0) {
                for (let j = i; j < value; j += i) {
                    if (arr[j] == 0) arr[j] = i;
                }
            }
        }
        for (let i = 2; i < value; i++) {
            if (arr[i] == i) ans.push(i);
        }
        return ans;
    };
};

// main
const main = function () {

    // param
    let n: number;
    let m: number;
    let an: number[];

    // init
    n = Number(read());
    m = Number(read());
    an = [...Array(n)].map(() => Number(read()));

    // solve
    let pl = Mathx.getPrimeList(m);
    let ps = [];
    for (const a of an) {
        for (let lx = 0; lx < pl.length; lx++) {
            // TODO TLE pがanの半分を超えたら終了させる
            if (pl[lx]) {
                if (a % pl[lx] == 0) {
                    ps.push(pl[lx]);
                    pl[lx] = 0;
                }
            }
        }
    }
    let dm = [...Array(m + 1)].map((val, idx) => idx);
    for (const p of ps) {
        for (let mx = p; mx <= m; mx += p) {
            dm[mx] = 0;
        }
    }
    dm = dm.filter(val => val);
    let ans = "";
    ans += dm.length + "\n";
    for (let mx = 0; mx <= m; mx++) {
        if (dm[mx]) ans += dm[mx] + "\n";
    }

    // answer
    console.log(ans);

    return;

};
main();
