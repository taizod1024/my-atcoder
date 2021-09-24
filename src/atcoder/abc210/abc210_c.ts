import * as rl from "readline";

// util for input
const lineit = rl.createInterface({ input: process.stdin });
const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
const charit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) for (const char of word.split("")) yield await char; })();
const read = async () => String((await wordit.next()).value);
const readchar = async () => String((await charit.next()).value);

// main
const main = async function () {

    // param
    let n: number, k: number;
    let cn: number[];

    // init
    n = Number(await read());
    k = Number(await read());
    cn = [];
    for (let nx = 0; nx < n; nx++) cn.push(Number(await read()));

    // solve

    // 座標圧縮
    let dn = cn.map((val, idx) => [val, 0, idx]);
    dn.sort((a, b) => a[0] - b[0]);
    dn.forEach((val, idx, arr) => {
        let pval = arr[idx - 1];
        if (idx == 0) val[1] = 0;
        else if (val[0] == pval[0]) val[1] = pval[1];
        else val[1] = pval[1] + 1;
    });
    dn.sort((a, b) => a[2] - b[2]);
    let en = dn.map(val => val[1]);

    // カウント
    let fn = new Array(n).fill(0);
    let gnow = 0;
    let gmax = 0;
    for (let nx = 0; nx < n; nx++) {
        if (fn[en[nx]] == 0) gnow++;
        fn[en[nx]]++;
        if (k <= nx) {
            fn[en[nx - k]]--;
            if (fn[en[nx - k]] == 0) gnow--;
        }
        gmax = Math.max(gmax, gnow);
    }
    let ans = gmax;

    // answer
    console.log(ans);

    return;

};
main();
