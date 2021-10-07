import * as fs from "fs";

// util for input
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line.trim(); })();
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
const charit = (function* () { while (true) { let word = wordit.next(); if (word.done) break; for (const char of String(word.value).split("")) yield char; } })();
const readline = () => String((lineit.next()).value);
const read = () => String((wordit.next()).value);
const readchar = () => String((charit.next()).value);

// main
const main = function () {

    // param
    let h: number;
    let w: number;
    let shw: string[][];

    // init
    h = Number(read());
    w = Number(read());
    shw = [...Array(h)].map(() => [...Array(w)].map(() => readchar()));

    // solve

    // グリッドからグラフへの変換
    const node_from_grid = function (shw: string[][]): number[][] {
        let pn = [...Array(h * w)].fill(null).map(() => []);
        for (let hx = 0; hx < h; hx++) {
            for (let wx = 0; wx < w; wx++) {
                if (shw[hx][wx] == ".") {
                    if (0 < hx) {
                        if (shw[hx - 1][wx] == ".") {
                            pn[(hx - 1) * w + wx].push(hx * w + wx);
                            pn[hx * w + wx].push((hx - 1) * w + wx);
                        }
                    }
                    if (0 < wx) {
                        if (shw[hx][wx - 1] == ".") {
                            pn[hx * w + wx - 1].push(hx * w + wx);
                            pn[hx * w + wx].push(hx * w + wx - 1);
                        }
                    }
                }
            }
        }
        return pn;
    }

    // BFSでn0からの距離を返す
    const dist_from_node = function (pn0: number[][], n0: number): number[] {
        let dn = [...Array(h * w)].fill(-1);
        dn[n0] = 0;
        let qn = [n0];
        for (let nx of qn) {
            for (let nxx of pn0[nx]) {
                if (dn[nxx] == -1) {
                    dn[nxx] = dn[nx] + 1;
                    qn.push(nxx);
                }
            }
        }
        return dn;
    }

    // 最大距離を返す
    const max_from_dist = function (dn0: number[]): number {
        let d = dn0.reduce((pval, cval) => Math.max(pval, cval));
        return d;
    }

    // 全マスについて最大距離の算出
    let ans = -1;
    let pn = node_from_grid(shw);
    for (let nx = 0; nx < h * w; nx++) {
        ans = Math.max(ans, max_from_dist(dist_from_node(pn, nx)));
    }

    // answer
    console.log(ans);

    return;

};
main();
