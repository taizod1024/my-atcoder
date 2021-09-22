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
    let n: bigint;

    // init
    n = BigInt(await read());

    // solve
    let ans;

    let n0 = n;
    let bm = [];
    while (n0 != 0n) {
        bm.push(n0 % 2n != 0n);
        n0 /= 2n;
    }
    bm = bm.reverse();

    let cl = [];
    for (let mx = 0; mx < bm.length; mx++) {
        if (mx != 0) cl.push("B");
        if (bm[mx]) cl.push("A");
    }
    ans = cl.join("");

    // answer
    console.log(ans);

    return;

};
main();
