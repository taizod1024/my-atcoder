// main
(async () => {

    // util for input
    const rl = require("readline").createInterface({ input: process.stdin });
    const lineit = rl[Symbol.asyncIterator]();
    const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
    const charit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) for (const char of word.split("")) yield await char; })();
    const read = async () => String((await wordit.next()).value);
    const readchar = async () => String((await charit.next()).value);

    // bsearch
    const bsearch = function (arr: any[], val: any, compare_fn: (a: any, b: any, arr: any[], bidx: number) => number) {
        let lidx = 0;
        let ridx = arr.length - 1;
        while (lidx <= ridx) {
            let bidx = (ridx + lidx) >> 1;
            let cmp = compare_fn(val, arr[bidx], arr, bidx);
            if (cmp > 0) { lidx = bidx + 1; continue; }
            if (cmp < 0) { ridx = bidx - 1; continue; }
            return bidx;
        }
        return -1;
    }
    const compare_fn = function (a: number, b: number, arr: any[] = null, bidx: number = 0) {
        if (a < b) return -1;
        if (a < arr[bidx + 1]) return 0;
        return 1;
    }

    // param
    let l: number, q: number;
    let cq: number[] = [], xq: number[] = [];

    // init
    l = Number(await read());
    q = Number(await read());
    for (let qx = 0; qx < q; qx++) {
        cq.push(Number(await read()));
        xq.push(Number(await read()));
    }

    // solve
    let wn = [0, l];
    for (let qx = 0; qx < q; qx++) {
        let nx = bsearch(wn, xq[qx], compare_fn);
        if (cq[qx] == 1) {
            wn.splice(nx + 1, 0, xq[qx]); // TODO TLE
        } else {
            let ans = wn[nx + 1] - wn[nx];
            // answer
            console.log(ans);
        }
    }

    return;

})();
