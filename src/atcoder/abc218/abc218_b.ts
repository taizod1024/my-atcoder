import { stringify } from "querystring";

// main
(async () => {
    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const lineiter = readline[Symbol.asyncIterator]();
    const readiter = (async function* () { for await (const line of lineiter) for (const word of line.split(" ")) yield await word; })();
    const read = async () => String((await readiter.next()).value);
    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }

    // param
    let pn: number[] = [];

    // init
    for (let nx = 0; nx < 26; nx++) {
        pn.push(Number(await read()))
    }

    // solve
    let ans = "";
    for (let nx = 0; nx < 26; nx++) {
        ans += String.fromCharCode("a".charCodeAt(0) + pn[nx] - 1);
    }

    // answer
    console.log(ans);
    return;
})();
