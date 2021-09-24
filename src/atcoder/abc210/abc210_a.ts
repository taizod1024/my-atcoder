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
    let n: number, a: number, x: number, y: number;

    // init
    n = Number(await read());
    a = Number(await read());
    x = Number(await read());
    y = Number(await read());

    // solve
    let ans
    if (n <= a) {
        ans = n * x;
    } else {
        ans = a * x + (n - a) * y;
    }

    // answer
    console.log(ans);

    return;

};
main();
