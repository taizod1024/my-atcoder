// main
(async () => {

    // util for input
    const rl = require("readline").createInterface({ input: process.stdin });
    const lineit = rl[Symbol.asyncIterator]();
    const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
    const charit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) for (const char of word.split("")) yield await char; })();
    const read = async () => String((await wordit.next()).value);
    const readchar = async () => String((await charit.next()).value);

    // param
    let x: number;

    // init
    x = Number(await read());

    // solve
    let ans;

    if (90 <= x) ans = "expert";
    else if (70 <= x) ans = 90 - x;
    else if (40 <= x) ans = 70 - x;
    else ans = 40- x;

    // answer
    console.log(ans);

    return;

})();
