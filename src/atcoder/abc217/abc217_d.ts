import * as rl from "readline";
import * as tstl from "tstl";

// util for input
const lineit = rl.createInterface({ input: process.stdin });
const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
const charit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) for (const char of word.split("")) yield await char; })();
const read = async () => String((await wordit.next()).value);
const readchar = async () => String((await charit.next()).value);

// main
const main = async function () {

    // param
    let l: number, q: number;
    let cq: number[] = [], xq: number[] = [];

    // init
    l = Number(await read());
    q = Number(await read());
    for (let qx = 0; qx < q; qx++) {
        cq.push(Number(await read()));
        xq.push(Number(await read()));
    }

    // // solve
    let ansn = [];
    let tree = new tstl.TreeSet<number>([0, l]);
    for (let qx = 0; qx < q; qx++) {
        if (cq[qx] == 1) {
            tree.insert(xq[qx]);
        } else {
            const it = tree.lower_bound(xq[qx]);
            ansn.push(it.value - it.prev().value);
        }
    }
    let ans = ansn.join("\n");

    // answer
    console.log(ans);

    return;

};
main();
