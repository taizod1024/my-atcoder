// main
(async () => {
    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const lineiter = readline[Symbol.asyncIterator]();
    const readiter = (async function* () { for await (const line of lineiter) for (const word of line.split(" ")) yield await word; })();
    const read = async () => (await readiter.next()).value;
    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }
    // param
    let n: number, m: number;
    let am: number[] = [], bm: number[] = [], cm: number[] = [];
    // init
    n = Number(await read());
    m = Number(await read());
    for (let mx of startlen(0, m)) {
        am.push(Number(await read()) - 1);
        bm.push(Number(await read()) - 1);
        cm.push(Number(await read()) - 1);
    }
    // solve
    // step 1
    let dn = new Array(n).fill(null).map(x => []);
    // WIP
    let ans;

    // 出力処理

    // ＜例＞bigintの末尾の"n"を削除して出力
    // ans = ans.toString().replace("n", "");

    // ＜例＞文字列配列を改行で結合して出力
    // ans = ans.join("\n");

    // ＜例＞二次元数値配列を結合して出力
    // ans = anm.map(an => an.join(" ")).join("\n");

    // answer
    console.log(ans);
    return;
})();
