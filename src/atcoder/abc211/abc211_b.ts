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
    let sn: string[];

    // init
    sn = new Array(4);
    for (let nx = 0; nx < 4; nx++) sn[nx] = await read();

    // solve
    let ans = ["H", "2B", "3B", "HR"].every(value => 0 <= sn.indexOf(value)) ? "Yes" : "No";

    // answer
    console.log(ans);

    return;

};
main();
