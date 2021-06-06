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
    let k: number;
    // init
    k = Number((await readline()));
    // solve
    // PENDING 解答作成できず
    // answer
    console.log();
    return;
}
main();
