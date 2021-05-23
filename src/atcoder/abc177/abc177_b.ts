export {};
// main
function main(input: string[]) {
    // param
    let s: string;
    let t: string;
    let ans: number;
    // init
    s = input[0];
    t = input[1];
    // solve
    let l = t.length;
    for (let i = 0; i <= s.length - t.length; i++) {
        let l0 = 0;
        for (let j = 0; j < t.length; j++) {
            if (s[i + j] != t[j]) {
                l0++;
                if (l < l0) break;
            }
        }
        if (l0 < l) l = l0;
        if (l == 0) break;
    }
    ans = l;
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
