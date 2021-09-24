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
    let s: string;

    // init
    n = Number(await read());
    s = await read();

    // solve
    let ans;
    let sn = s.split("");
    for (let nx = 0; nx < n; nx++) {
        ans = (nx % 2 == 0) ? "Takahashi" : "Aoki";
        if (sn[nx] == "1") break;
    }

    // answer
    console.log(ans);

    return;

};
main();
