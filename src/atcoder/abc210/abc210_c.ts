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
    let n: number, k: number;
    let cn: number[];

    // init
    n = Number(await read());
    k = Number(await read());
    cn = [];
    for (let nx = 0; nx < n; nx++) cn.push(Number(await read()));

    // solve

    let eh = {};
    let gnow = 0;
    let gmax = 0;
    for (let nx = 0; nx < n; nx++) {
        if (eh[cn[nx]] == undefined) eh[cn[nx]] = 0;
        if (eh[cn[nx]] == 0) gnow++;
        eh[cn[nx]]++;
        if (k <= nx) {
            eh[cn[nx - k]]--;
            if (eh[cn[nx - k]] == 0) gnow--;
        }
        gmax = Math.max(gmax, gnow);
    }
    let ans = gmax;

    // answer
    console.log(ans);

    return;

};
main();
