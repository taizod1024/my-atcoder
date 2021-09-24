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
    let h: number, w: number, n: number;
    let abn: number[][];

    // init
    h = Number(await read());
    w = Number(await read());
    n = Number(await read());
    abn = [];
    for (let nx = 0; nx < n; nx++) {
        abn.push([Number(await read()), Number(await read())]);
    }

    // solve
    // 座標圧縮
    let wk: number;
    abn.forEach((value, index) => value.push(0, 0, index));
    abn.sort((a, b) => a[0] - b[0]).forEach((value, index, array) => {
        if (index == 0) wk = 1;
        else if (value[0] != array[index - 1][0]) wk++;
        value[2] = wk;
    });
    abn.sort((a, b) => a[1] - b[1]).forEach((value, index, array) => {
        if (index == 0) wk = 1;
        else if (value[1] != array[index - 1][1]) wk++;
        value[3] = wk;
    });
    abn.sort((a, b) => a[4] - b[4]);
    let ans = abn.map(value => value[2] + " " + value[3]).join("\n");

    // answer
    console.log(ans);

    return;

};
main();
