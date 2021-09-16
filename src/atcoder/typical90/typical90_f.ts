// main
(async () => {

    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const lineit = readline[Symbol.asyncIterator]();
    const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
    const read = async () => String((await wordit.next()).value);

    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }

    // param
    let n: number, k: number;
    let s: string;

    // init
    n = Number(await read());
    k = Number(await read());
    s = await read();

    // solve
    let sn = s.split("");

    // step 1
    let m = 26;
    let nnm = new Array(n).fill(null).map(x => new Array(m).fill(-1));
    let codea = "a".charCodeAt(0);
    for (let nx = n - 1; 0 <= nx; nx--) {
        if (nx != n - 1) {
            for (let mx = 0; mx < m; mx++) {
                nnm[nx][mx] = nnm[nx + 1][mx];
            }
        }
        let mxx = sn[nx].charCodeAt(0) - codea;
        nnm[nx][mxx] = nx;
    }

    // step 2
    let ans = [];
    let nx = 0;
    for (let kx = 0; kx < k; kx++) {
        for (let mx = 0; mx < m; mx++) {
            let nxx = nnm[nx][mx];
            if (nxx == -1) continue;
            if (nxx <= n - k + kx) {
                nx = nxx + 1;
                ans.push(String.fromCharCode(codea + mx));
                break;
            }
        }
    }

    // answer
    console.log(ans.join(""));

    return;

})();
