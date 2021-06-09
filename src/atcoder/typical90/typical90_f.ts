// main
(async () => {
    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const lineiter = readline[Symbol.asyncIterator]();
    const readiter = (async function* () { for await (const line of lineiter) for (const word of line.split(" ")) yield await word; })();
    const read = async () => (await readiter.next()).value;
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
    let nnm = new Int32Array(n * m).fill(-1);
    let getnnm = (nx, mx) => nnm[nx * m + mx];
    let setnnm = (nx, mx, val) => nnm[nx * m + mx] = val;
    let codea = "a".charCodeAt(0);
    for (let nx = n - 1; 0 <= nx; nx--) {
        if (nx != n - 1) {
            for (let mx = 0; mx < m; mx++) {
                setnnm(nx, mx, getnnm(nx + 1, mx));
            }
        }
        let code = sn[nx].charCodeAt(0) - codea;
        setnnm(nx, code, nx);
    }
    // step 2
    let nx = 0;
    for (let kx = 0; kx < k; kx++) {
        let nxx = n - k + kx;
        for (let mx = 0; mx < m; mx++) {
            // WIP
        }
    }
    // answer
    console.log();
    return;
})();
