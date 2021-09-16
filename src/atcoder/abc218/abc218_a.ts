// main
(async () => {
    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const lineiter = readline[Symbol.asyncIterator]();
    const worditer = (async function* () { for await (const line of lineiter) for (const word of line.split(" ")) yield await word; })();
    const read = async () => String((await worditer.next()).value);
    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }

    // param
    let n: number;
    let s: string;

    // init
    n = Number(await read());
    s = await read();

    // solve
    let ans = s.charAt(n - 1) == "o" ? "Yes" : "No";

    // answer
    console.log(ans);
    return;
})();
