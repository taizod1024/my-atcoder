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
    let n: number, m: number;
    let an: number[];
    let bm: number[];

    // init
    n = Number(await read());
    m = Number(await read());
    an = [];
    bm = [];
    for (let nx = 0; nx < n; nx++) an[nx] = Number(await read());
    for (let mx = 0; mx < m; mx++) bm[mx] = Number(await read());

    // solve
    an.sort((a, b) => a - b);
    bm.sort((a, b) => a - b);
    let nx = 0;
    let mx = 0;
    let ans = Number.MAX_SAFE_INTEGER;
    while (nx < n && mx < m) {
        ans = Math.min(ans, Math.abs(an[nx] - bm[mx]));
        if (an[nx] < bm[mx]) nx++; else mx++;
    }

    // answer
    console.log(ans);

    return;

};
main();
