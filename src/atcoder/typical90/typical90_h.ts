export { };
// main
function main(input: string[]) {
    // param
    let n: number;
    let s: string;
    // init
    n = Number(input.shift());
    s = input.shift();
    // solve
    let sm = s.split("").filter(x => ["a", "t", "c", "o", "d", "e", "r"].includes(x));
    let a = 0, t = 0, c = 0, o = 0, d = 0, e = 0, r = 0;
    for (let mx = 0; mx < sm.length; mx++) {
        switch (sm[mx]) {
            case "a": a += 1; a %= 1000000007; break;
            case "t": t += a; t %= 1000000007; break;
            case "c": c += t; c %= 1000000007; break;
            case "o": o += c; o %= 1000000007; break;
            case "d": d += o; d %= 1000000007; break;
            case "e": e += d; e %= 1000000007; break;
            case "r": r += e; r %= 1000000007; break;
        }
    }
    // answer
    console.log(r);
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
