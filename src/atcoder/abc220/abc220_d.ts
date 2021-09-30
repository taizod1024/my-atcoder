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
    let an: number[];

    // init
    n = Number(read());
    an = [...Array(n)].map(() => Number(read()));

    // solve
    const MOD = 998244353;
    let dp: number[] = new Array(10).fill(0);
    dp[an[0]] = 1;
    for (let nx = 1; nx < n; nx++) {
        let dp0 = dp;
        dp = new Array(10).fill(0);
        for (let nxx = 0; nxx < 10; nxx++) {
            let f = (nxx + an[nx]) % 10;
            let g = (nxx * an[nx]) % 10;
            dp[f] += dp0[nxx];
            dp[g] += dp0[nxx];
            dp[f] %= MOD;
            dp[g] %= MOD;
        }
    }
    let ans = dp.join("\n");

    // answer
    console.log(ans);

    return;

};
main();
