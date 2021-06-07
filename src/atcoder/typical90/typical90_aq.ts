export { };
// main
async function main() {
    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readlineiter = readline[Symbol.asyncIterator]();
    const readworditer = (async function* () { for await (const line of readlineiter) for (const word of line.split(" ")) yield await word; })();
    const inputline = async () => (await readlineiter.next()).value;
    const inputword = async () => (await readworditer.next()).value;
    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }
    // param
    let h: number, w: number;
    let rs: number, cs: number;
    let rt: number, ct: number;
    let src: string[][] = [];
    // init
    h = Number((await inputword()));
    w = Number((await inputword()));
    rs = Number((await inputword()));
    cs = Number((await inputword()));
    rt = Number((await inputword()));
    ct = Number((await inputword()));
    for (let rx of startlen(0, h)) {
        src.push((await inputline()).split(""));
    }
    // solve
    let ans = 0;
    // answer
    console.log(ans);
    return;
}
main();
