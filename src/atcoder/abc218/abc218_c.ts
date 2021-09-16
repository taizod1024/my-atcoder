// main
(async () => {

    // util for input
    const rl = require('readline').createInterface({ input: process.stdin });
    const lineit = rl[Symbol.asyncIterator]();
    const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
    const charit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) for (const char of word.split("")) yield await char; })();
    const read = async () => String((await wordit.next()).value);
    const readchar = async () => String((await charit.next()).value);

    // param
    let n: number;
    let tm: number[][];
    let sm: number[][];

    // func
    const readblock = async function () {
        let lm: number[][] = [];
        for (let nx = 0; nx < n; nx++)
            for (let nxx = 0; nxx < n; nxx++)
                if (await readchar() == "#")
                    lm.push([nx, nxx]);
        return lm;
    };
    const normalblock = function (lm: number[][]) {
        let minx = lm.map(val => val[0]).reduce((a, b) => a < b ? a : b);
        let miny = lm.map(val => val[1]).reduce((a, b) => a < b ? a : b);
        return lm.map(val => [val[0] - minx, val[1] - miny]).sort((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
    };
    const transblock = function(lm: number[][]) {
        return lm.map(val => [val[1], -val[0]]);
    }

    // init
    n = Number(await read());
    sm = await readblock();
    tm = await readblock();

    // solve
    let ans = "No";
    sm = normalblock(sm);
    for (let mx = 0; mx < 4; mx++) {
        tm = normalblock(tm);
        if (JSON.stringify(sm) == JSON.stringify(tm)) {
            ans = "Yes";
            break;
        }
        tm = transblock(tm);
    }

    // answer
    console.log(ans);

    return;

})();
