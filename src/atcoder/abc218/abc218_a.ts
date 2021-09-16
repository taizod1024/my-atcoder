// main
(async () => {

    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const lineit = readline[Symbol.asyncIterator]();
    const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
    const read = async () => String((await wordit.next()).value);

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
