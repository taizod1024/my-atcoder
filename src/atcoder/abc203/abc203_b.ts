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
    let n: number, k: number;
    // init
    [n, k] = [Number(await readword()), Number(await readword())];
    // solve
    let ans = 0;
    for (let nx = 1; nx <= n; nx++) {
        for (let kx = 1; kx <= k; kx++) {
            let r = nx * 100 + kx;
            ans += r;
        }
    }
    // answer
    console.log(ans);
    return;
}
main();
