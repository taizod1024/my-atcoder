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
    let an: number[];
    let bn: number[];

    // init
    n = Number(read());
    an = [...Array(n)].map(() => Number(read()) - 1); // to zero base
    bn = [...Array(n)].map(() => Number(read()) - 1); // to zero base

    // solve
    const mod = 998244353;
    const p = 3001;
    let dp = [...Array(p)].fill(0); // dp[n] ... nで終わる広義単調増加
    for (let px = 0; px < p; px++) {
        dp[px] = (px < an[0] || bn[0] < px) ? 0 : 1;
    }
    for (let nx = 1; nx < n; nx++) {
        let sum = 0;
        for (let px = 0; px < p; px++) {
            sum = (sum + dp[px]) % mod;
            dp[px] = (px < an[nx] || bn[nx] < px) ? 0 : sum;
        }
    }
    let ans = dp.reduce((a, b) => (a + b) % mod);

    // TODO WA
    
    // answer
    console.log(ans);

    return;

};
main();
