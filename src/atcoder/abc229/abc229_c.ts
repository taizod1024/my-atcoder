import * as fs from "fs";

// util for input
const lineit = (function* () {
    for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line.trim();
})();
const wordit = (function* () {
    while (true) {
        let line = lineit.next();
        if (line.done) break;
        for (const word of String(line.value).split(" ")) yield word;
    }
})();
const charit = (function* () {
    while (true) {
        let word = wordit.next();
        if (word.done) break;
        for (const char of String(word.value).split("")) yield char;
    }
})();
const readline = () => String(lineit.next().value);
const read = () => String(wordit.next().value);
const readchar = () => String(charit.next().value);

// main
const main = function () {
    // param
    let n: number;
    let w: number;
    let abn: number[][];

    // init
    n = Number(read());
    w = Number(read());
    abn = new Array(n);
    for (let nx = 0; nx < n; nx++) {
        abn[nx] = [Number(read()), Number(read())];
    }

    // solve
    let ans = 0n;
    abn.sort((a, b) => b[0] - a[0]);
    for (let nx = 0; nx < n; nx++) {
        if (w <= abn[nx][1]) {
            ans += BigInt(abn[nx][0] * w);
            break;
        }
        ans += BigInt(abn[nx][0] * abn[nx][1]);
        w -= abn[nx][1];
    }

    // answer
    let ans0 = String(ans).replace("n", "");
    console.log(ans0);

    return;
};
main();
