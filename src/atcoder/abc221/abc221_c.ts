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

    // init
    n = Number(read());

    // solve
    let ans = 0;

    // 文字列配列化
    let sm = String(n).split("");

    // ビット全探索
    let bitsearch_max = 1 << sm.length;
    loop: for (let bitsearch = 0; bitsearch < bitsearch_max; bitsearch++) {

        // 文字配列分割
        let sl = [[], []];
        for (let mx = 0; mx < sm.length; mx++) {
            let lx = (bitsearch & 1 << mx) ? 1 : 0;
            sl[lx].push(sm[mx]);
        }

        // 積計算
        let nl = [0, 0];
        for (let lx = 0; lx < 2; lx++) {
            if (sl[lx].length == 0) continue loop; // 文字配列空チェック
            sl[lx].sort().reverse(); // 文字配列逆順整列
            if (sl[lx][0] == "0") continue loop; // 文字配列先頭0チェック
            nl[lx] = Number(sl[lx].join("")); // 積計算
        }

        // 積最大値更新
        ans = Math.max(ans, nl[0] * nl[1]);
    }

    // answer
    console.log(ans);

    return;

};
main();
