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
    let n: number;
    let m: number;
    let anm: { idx: number, win: number, gcp: string[] }[];

    // init
    n = Number(read());
    m = Number(read());
    anm = [...Array(n * 2)].map((val, idx) => { return { idx: idx, win: 0, gcp: read().split("") } });

    // solve
    for (let mx = 0; mx < m; mx++) {
        // fight
        for (let nx = 0; nx < n * 2; nx += 2) {
            let win = false;
            if (anm[nx].gcp[mx] == "G" && anm[nx + 1].gcp[mx] == "C") { anm[nx].win++; continue; }
            if (anm[nx].gcp[mx] == "C" && anm[nx + 1].gcp[mx] == "P") { anm[nx].win++; continue; }
            if (anm[nx].gcp[mx] == "P" && anm[nx + 1].gcp[mx] == "G") { anm[nx].win++; continue; }
            if (anm[nx].gcp[mx] == "G" && anm[nx + 1].gcp[mx] == "P") { anm[nx + 1].win++; continue; }
            if (anm[nx].gcp[mx] == "C" && anm[nx + 1].gcp[mx] == "G") { anm[nx + 1].win++; continue; }
            if (anm[nx].gcp[mx] == "P" && anm[nx + 1].gcp[mx] == "C") { anm[nx + 1].win++; continue; }
        }
        // sort
        anm.sort((a, b) => a.win != b.win ? b.win - a.win : a.idx - b.idx);
    }
    let ans = anm.map(val => val.idx + 1).join("\n");

    // answer
    console.log(ans);

    return;

};
main();
