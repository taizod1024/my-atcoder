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
    let n: number;
    let an: number[];

    // init
    n = Number(await read());
    an = [];
    for (let nx = 0; nx < n; nx++) {
        an[nx] = Number(await read());
    }

    // solve
    let bn = an.map((val, idx) => [val, idx]).sort((a, b) => a[0] - b[0]);
    let ans = bn[bn.length - 2][1] + 1;

    // answer
    console.log(ans);

    return;

};
main();
