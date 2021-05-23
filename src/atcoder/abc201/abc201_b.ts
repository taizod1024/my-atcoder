export { };
// main
function main(input: string[]) {
    // param
    let ans: string;
    let n: number;
    let stn: { s: string, t: number }[];
    n = Number(input.shift());
    stn = input.map(x => x.split(" ")).map(st => { return { s: st[0], t: Number(st[1]) }; });
    // solve
    stn.sort((a, b) => { return b.t - a.t; });
    ans = stn[1].s;
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
