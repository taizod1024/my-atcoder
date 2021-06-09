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
    let n: number, l: number
    let k: number;
    let an: number[] = [];
    // init
    n = Number(await read());
    l = Number(await read());
    k = Number(await read());
    for (let nx of startlen(0, n)) {
        an.push(Number(await read()))
    }
    // solve
    let m = n + 1;
    let bm = [];
    for (let mx of startlen(0, m)) {
        let b = 0;
        if (mx == 0) b = an[mx];
        else if (mx < n) b = an[mx] - an[mx - 1];
        else b = l - an[mx - 1];
        bm.push(b);
    }
    // greedy
    function greedy(v: number) {
        let vv = 0;
        let kk = 0;
        let ss = Number.MAX_SAFE_INTEGER;
        for (let mx = 0; mx < m; mx++) {
            vv += bm[mx];
            if (kk < k && v <= vv) {
                ss = Math.min(ss, vv);
                kk++;
                vv = 0;
            }
        }
        return (kk < k || vv < v) ? 0 : Math.min(ss, vv);
    }
    // bsearch
    let ans = 0;
    function bsearch(left: number, right: number) {
        if (left > right) return;
        let mid = Math.floor((left + right) / 2);
        let score = greedy(mid);
        ans = Math.max(ans, score);
        if (0 < score) {
            bsearch(mid + 1, right);
        } else {
            bsearch(left, mid - 1);
        }
    }
    bsearch(0, l);
    // answer
    console.log(ans);
    return;
})();
