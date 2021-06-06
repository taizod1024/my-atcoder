export { };
// main
async function main() {
    // input
    const rl = require('readline').createInterface({ input: process.stdin });
    const readlineiter = rl[Symbol.asyncIterator]();
    const readworditer = (async function* () { let vals = (await readlineiter.next()).value.split(" "); for (let nx = 0; nx < vals.length; nx++) yield vals[nx]; })();
    const readline = async () => { return (await readlineiter.next()).value; };
    const readword = async () => { return (await readworditer.next()).value; };
    // param
    let n: number, m: number;
    let am: number[], bm: number[];
    // init
    n = Number((await readword()));
    m = Number((await readword()));
    am = [];
    bm = [];
    for (let mx = 0; mx < m; mx++) {
        am.push(Number(await readword()) - 1);
        bm.push(Number(await readword()) - 1);
    }
    // solve
    // WIP
    // answer
    console.log(ans);
    return;
}
main();
