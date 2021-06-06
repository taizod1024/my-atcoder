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
    let n: number;
    let an: number[];
    // init
    n = Number((await readline()));
    an = (await readline()).split(" ").map(x => Number(x));
    // solve
    let ans = an.map(x => (x <= 10) ? 0 : x - 10).reduce((prev, curr) => prev + curr);
    // answer
    console.log(ans);
    return;
}
main();
