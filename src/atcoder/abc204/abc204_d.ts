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
    let tn: number[];

    // init
    n = Number(read());
    tn = [...Array(n)].map(() => Number(read()));

    // solve

    /**
     * N品の料理を2つの集合に分け、それぞれ作るのにかかる時間の合計の最大値を最小化する
     * T1,…,TNからいくつか選んだ和であって、S/2 以上の最小値は？
     * T1,…,TNからいくつか選んだ和をxにすることができるか？
     * dp[i][j]=T1,…,Tiからいくつか選んで和をjにできるか？という真偽値を持つDP
     */

    // dp[i][j]、ti以下を使ってjにできるか
    let m = tn.reduce((pval, cval) => pval + cval) + 1;
    let dp = [...Array(n)].fill(null).map(() => [...Array(m)].fill(false));
    dp[0][tn[0]] = true;
    for (let nx = 1; nx < n; nx++) {
        for (let mx = 0; mx < m; mx++) {
            if (dp[nx - 1][mx]) {
                dp[nx][mx] = true;
                dp[nx][mx + tn[nx]] = true;
            }
        }
    }
    let ans;
    for (let mx = Math.floor(m / 2); mx < m; mx++) {
        ans = mx;
        if (dp[n - 1][mx]) break;
    }

    // answer
    console.log(ans);

    return;

};
main();
