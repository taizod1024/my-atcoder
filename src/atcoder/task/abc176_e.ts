export {};
// main
function main(input: string[]) {
    // param
    let h: number;
    let w: number;
    let m: number;
    let hm: number[];
    let wm: number[]
    let ans;
    // init
    [h, w, m] = input.shift().split(" ").map(x => Number(x));
    [hm, wm] = [[], []];
    let hw = new Map();
    for (let mx = 0; mx < m; mx++) {
        let wrk0 = input[mx].split(" ").map(x => Number(x) - 1);
        hm[mx] = wrk0[0];
        wm[mx] = wrk0[1];
        hw.set(hm[mx] * w + wm[mx], 1);
    }
    // solve
    // count bomb
    let ha: number[] = new Array(h).fill(0);
    let wa: number[] = new Array(w).fill(0);
    for (let hme of hm) { ha[hme]++; }
    for (let wme of wm) { wa[wme]++; }
    // get max
    let hamax: number = Math_max(ha);
    let wamax: number = Math_max(wa);
    // get 
    let hamaxarr: number[] = [];
    let wamaxarr: number[] = [];
    ha.forEach((val, idx) => { if (val == hamax) hamaxarr.push(idx) });
    wa.forEach((val, idx) => { if (val == wamax) wamaxarr.push(idx) });
    let isfull;
    if (m < hamaxarr.length * wamaxarr.length) {
        isfull = false;
    } else {
        let cnt = 0;
        for (let hamaxarre of hamaxarr) {
            for (let wamaxarre of wamaxarr) {
                if (hw.get(hamaxarre * w + wamaxarre) == 1) cnt++;
            }
        }
        isfull = hamaxarr.length * wamaxarr.length == cnt;
    }
    ans = Math_max(ha) + Math_max(wa) + (isfull ? -1 : 0);
    // answer
    return ans;
}
// math lib
function Math_max(arr: number[]): number { return arr.reduce((x, y) => Math.max(x, y)); }
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();