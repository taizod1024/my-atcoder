export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readiter = readline[Symbol.asyncIterator]();
    async function readlineasync() { return (await readiter.next()).value; }
    // param
    let h: number, w: number;
    let q: number;
    let qqn: number[][];
    // init
    [h, w] = (await readlineasync()).split(" ").map(x => Number(x));
    q = Number(await readlineasync());
    qqn = [];
    for (let qx = 0; qx < q; qx++) {
        qqn.push((await readlineasync()).split(" ").map(x => Number(x) - 1));
    }
    // WIP 提出でTLEあり、連結してたら判定を削減できる
    // solve
    let hw = new Array(h).fill(null).map(x => new Array(w).fill(-2));
    let gethw = (p) => hw[p[0]][p[1]];
    let sethw = (p, v) => { hw[p[0]][p[1]] = v };
    let cmphw = (p1, p2) => p1[0] == p2[0] && p1[1] == p2[1];
    let addpnt = (p, v) => [p[0] + v[0], p[1] + v[1]];
    let chkhw = (p) => 0 <= p[0] && p[0] < h && 0 <= p[1] && p[1] < w;
    for (let qx = 0; qx < q; qx++) {
        let pstart = qqn[qx].slice(1, 3);
        let pend = qqn[qx].slice(3);
        if (qqn[qx][0] == 0) {
            sethw(pstart, -1);
        } else {
            if (gethw(pstart) == -2) { console.log("No"); continue; }
            if (gethw(pend) == -2) { console.log("No"); continue; }
            let points = [pstart];
            while (true) {
                let pcurr = points.pop();
                if (!pcurr) { console.log("No"); break; }
                if (cmphw(pcurr, pend)) { console.log("Yes"); break; }
                [[-1, 0], [+1, 0], [0, -1], [0, +1]].forEach((vnext) => {
                    let pcurent = addpnt(pcurr, vnext);
                    if (chkhw(pcurent) && -1 <= gethw(pcurent) && gethw(pcurent) < qx) {
                        sethw(pcurent, qx);
                        points.push(pcurent);
                    }
                });
            }
        }
    }
    // answer
    return;
}
main();
