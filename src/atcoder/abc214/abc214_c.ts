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
    let sn: number[];
    let tn: number[];

    // init
    n = Number(await read());
    sn = [];
    tn = [];
    for (let nx = 0; nx < n; nx++) sn[nx] = Number(await read());
    for (let nx = 0; nx < n; nx++) tn[nx] = Number(await read());

    // solve
    let un = Array.from(tn);
    for (let nx = 0; nx < n * 2; nx++) {
        un[(nx + 1) % n] = Math.min(un[(nx + 1) % n], un[nx % n] + sn[nx % n]);
    }
    let ans = un.join("\n");

    // answer
    console.log(ans);

    return;

};
main();
