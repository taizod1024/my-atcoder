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
    let s: string;

    // init
    s = await read();

    // solve
    let M1097 = 1000000007
    let sn = s.split("");
    let cm = new Array(8).fill(0);
    for (let nx = 0; nx < sn.length; nx++) {
        let cm0 = Array.from(cm);
        if (sn[nx] == "c") cm[0] = (cm0[0] + 1) % M1097;
        else if (sn[nx] == "h") cm[1] = (cm0[1] + cm0[0]) % M1097;
        else if (sn[nx] == "o") cm[2] = (cm0[2] + cm0[1]) % M1097;
        else if (sn[nx] == "k") cm[3] = (cm0[3] + cm0[2]) % M1097;
        else if (sn[nx] == "u") cm[4] = (cm0[4] + cm0[3]) % M1097;
        else if (sn[nx] == "d") cm[5] = (cm0[5] + cm0[4]) % M1097;
        else if (sn[nx] == "a") cm[6] = (cm0[6] + cm0[5]) % M1097;
        else if (sn[nx] == "i") cm[7] = (cm0[7] + cm0[6]) % M1097;
    }
    let ans = cm[7];

    // answer
    console.log(ans);

    return;

};
main();
