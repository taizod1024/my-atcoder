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
    let stn: string[];

    // init
    n = Number(await read());
    stn = [];
    for (let nx = 0; nx < n; nx++) {
        stn.push((await read()) + " " + (await read()));
    }

    // solve
    let ans = "No";
    stn.sort();
    for (let nx = 1; nx < n; nx++) {
        if (stn[nx-1] == stn[nx]) {
            ans = "Yes";
            break;
        }
    }

    // answer
    console.log(ans);

    return;

};
main();
