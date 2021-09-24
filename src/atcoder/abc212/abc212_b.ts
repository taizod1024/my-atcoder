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
    let xn: number[];

    // init
    xn = new Array(4);
    xn[0] = Number(await readchar());
    xn[1] = Number(await readchar());
    xn[2] = Number(await readchar());
    xn[3] = Number(await readchar());

    // solve
    let ans;
    if (xn[0] == xn[1] && xn[1] == xn[2] && xn[2] == xn[3]) ans = "Weak";
    else if ((xn[0] + 1) % 10 == xn[1] && (xn[1] + 1) % 10 == xn[2] && (xn[2] + 1) % 10 == xn[3]) ans = "Weak"
    else ans = "Strong";

    // answer
    console.log(ans);

    return;

};
main();
