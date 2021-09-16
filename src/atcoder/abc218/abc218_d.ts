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
    const bsearch = function (arr: any[], val: any, compare_fn: (a: any, b: any) => number) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let center = (right + left) >> 1;
            let cmp = compare_fn(val, arr[center]);
            if (cmp > 0) {
                left = center + 1;
            } else if (cmp < 0) {
                right = center - 1;
            } else {
                return center;
            }
        }
        return -1;
    }
    const compare = function (a: number[], b: number[]) {
        return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1];
    }

    // param
    let n: number;
    let xyn: number[][] = [];

    // init
    n = Number(await read());
    for (let nx = 0; nx < n; nx++) {
        xyn.push([Number(await read()), Number(await read())]);
    }
 
    // solve
    let ans = 0;
    xyn.sort(compare);
    for (let nx = 0; nx < n; nx++) {
        for (let nxx = nx + 1; nxx < n; nxx++) {
            if (xyn[nx][0] == xyn[nxx][0]) continue;
            if (xyn[nx][1] == xyn[nxx][1]) continue;
            let nxxx = bsearch(xyn, [xyn[nx][0], xyn[nxx][1]], compare);
            if (nxxx < 0) continue;
            let nxxxx = bsearch(xyn, [xyn[nxx][0], xyn[nx][1]], compare);
            if (nxxxx < 0) continue;
            ans++;
        }
    }
    ans /= 2;

    // answer
    console.log(ans);

    return;

})();
