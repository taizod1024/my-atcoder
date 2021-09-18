// main
(async () => {

    // util for input
    const rl = require("readline").createInterface({ input: process.stdin });
    const lineit = rl[Symbol.asyncIterator]();
    const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
    const charit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) for (const char of word.split("")) yield await char; })();
    const read = async () => String((await wordit.next()).value);
    const readchar = async () => String((await charit.next()).value);

    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }

    // param
    let s1: string;
    let s2: string;
    let s3: string;
    
    // init
    s1 = await read();
    s2 = await read();
    s3 = await read();
    
    // solve
    let ans;
    if (s1 != "ABC" && s2 != "ABC" && s3 != "ABC") ans = "ABC"
    else if (s1 != "ARC" && s2 != "ARC" && s3 != "ARC") ans = "ARC"
    else if (s1 != "AGC" && s2 != "AGC" && s3 != "AGC") ans = "AGC"
    else ans = "AHC";
    
    // answer
    console.log(ans);

    return;

})();
