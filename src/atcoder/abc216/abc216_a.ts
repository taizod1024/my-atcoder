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
    let x: number, y: number;

    // init
    [x, y] = (await read()).split(".").map(val => Number(val));

    // solve
    let ans;
    if (0 <= y && y <= 2) ans = x + "-";
    else if (3 <= y && y <= 6) ans = x;
    else if (7 <= y && y <= 9) ans = x + "+";

    // answer
    console.log(ans);

    return;

};
main();
