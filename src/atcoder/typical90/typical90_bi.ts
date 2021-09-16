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
    let q: number;
    let tq: number[] = [], xq: number[] = [];
    // init
    q = Number(await read());
    for (let nx = 0; nx < q; nx++) {
        tq.push(Number(await read()));
        xq.push(Number(await read()));
    }
    // solve
    let deck1 = [];
    let deck2 = [];
    for (let qx = 0; qx < q; qx++) {
        if (tq[qx] == 1) {
            deck1.push(xq[qx]);
        } else if (tq[qx] == 2) {
            deck2.push(xq[qx]);
        } else if (tq[qx] == 3) {
            // answer
            if (xq[qx] <= deck1.length) {
                console.log(deck1[deck1.length - xq[qx]]);
            } else {
                console.log(deck2[xq[qx] - deck1.length - 1]);
            }
        }
    }
    return;
})();
