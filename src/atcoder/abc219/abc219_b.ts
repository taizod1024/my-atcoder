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
    let sn: string[] = new Array(3);
    let t: string;
    
    // init
    sn[0] = await read(); 
    sn[1] = await read(); 
    sn[2] = await read(); 
    t = await read();
    
    // solve
    let ans = t.split("").map(val => val.charCodeAt(0) - "1".charCodeAt(0)).map(val => sn[val]).join("");

    // answer
    console.log(ans);

    return;

})();
