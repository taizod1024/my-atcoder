export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readlineiter = readline[Symbol.asyncIterator]();
    const readworditer = (async function* () { for await (const vals of readlineiter) for (const val of vals.split(" ")) yield await val; })();
    const inputline = async () => { return (await readlineiter.next()).value; };
    const inputword = async () => { return (await readworditer.next()).value; };
    // param
    let n: number;
    let anm: number[][];
    // init
    n = Number((await inputline()));
    anm = [];
    for (let nx = 0; nx < n; nx++) {
        anm.push((await inputline()).split(" ").map(x => Number(x)));
    }
    // TODO edit the code
    // solve
    let ans = 0;
    // answer
    console.log(ans);
    return;
}
main();
