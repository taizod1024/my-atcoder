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
    let s: number, t: number;

    // init
    s = Number(await read());
    t = Number(await read());

    // solve
    let ans = 0;
    for (let a = 0; a <= 100; a++) {
        for (let b = 0; b <= 100; b++) {
            for (let c = 0; c <= 100; c++) {
                if (a + b + c <= s && a * b * c <= t) {
                    ans++;
                }
            }
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
