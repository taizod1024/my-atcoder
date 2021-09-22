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
    let k: number;

    // init
    s = await read();
    k = Number(await read());

    // solve
    function* gen(an: string[]): IterableIterator<string[]> {
        if (an.length === 0) yield [];
        for (let nx = 0; nx < an.length; nx++) {
            const head = an[nx];
            const rest = [...an];
            rest.splice(nx, 1);
            for (const bn of gen(rest)) {
                yield [head, ...bn];
            }
        }
    }

    const map = new Map();
    for (const g of gen(s.split(""))) {
        map.set(g.join(""), true);
    }
    let ans = Array.from(map.keys()).sort()[k - 1];

    // answer
    console.log(ans);

    return;

};
main();
