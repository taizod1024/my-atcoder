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
    let ans = -1;
    while (n != 0n) {
        ans ++;
        n /= 2n;
    }

    // answer
    console.log(ans);

    return;

};
main();
