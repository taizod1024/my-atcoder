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
    let n: number;
    let pn: number[] = [];

    // init
    n = Number(await read());
    for (let nx = 0; nx < n; nx++) {
        pn.push(Number(await read()))
    }

    // solve
    let qn = new Array(n);
    for (let nx = 0; nx < n; nx++) {
        qn[pn[nx] - 1] = nx + 1;
    }
    let ans = qn.join(" ");

    // answer
    console.log(ans);

    return;

})();
