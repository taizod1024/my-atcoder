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

    let n = s.length;
    let tn = s.split("").reverse().map(val => Number(val)); // 逆順で処理するための配列
    let m = 2019
    let um = [...Array(m)].fill(0); // 剰余を格納する配列
    um[0] = 1; // 0も2019の倍数とみなす

    // x桁からn桁までを数字と見た時の2019の剰余を全桁について計算
    let m1 = 0; // x桁目までの剰余
    let d1 = 1; // 10^xの剰余
    for (let nx = 0; nx < n; nx++) {
        m1 = (tn[nx] * d1 + m1) % m; // x-1桁までの剰余にx桁の値を加えて剰余を再計算
        d1 = (d1 * 10) % m; // 10^(x+1)桁の剰余を再計算
        um[m1]++;
    }

    // 個数の計算
    let ans = 0;
    for (let mx = 0; mx < m; mx++) {
        ans += um[mx] * (um[mx] - 1) / 2;
    }

    // answer
    console.log(ans);

    return;

};
main();
