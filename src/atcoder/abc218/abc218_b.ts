// main
(async () => {

    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const lineit = readline[Symbol.asyncIterator]();
    const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
    const read = async () => String((await wordit.next()).value);

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
