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
    let x: string;
    let n: number;
    let sn: string[] = [];

    // init
    x = await read();
    n = Number(await read());
    for (let nx = 0; nx < n; nx++) {
        sn.push(await read())
    }

    // solve
    let ans;
    let cx = {};
    for (let xx = 0; xx < x.length; xx++) {
        cx[x.charAt(xx)] = xx;
    }
    let tn = sn.sort((a, b) => {
        const len = Math.min(a.length, b.length);
        for (let i = 0; i < len; i++) {
            if (a[i] !== b[i]) {
                return cx[a[i]] - cx[b[i]];
            }
        }
        return a.length - b.length;
    });
    ans = tn.join("\n");

    // answer
    console.log(ans);

    return;

}
main();
