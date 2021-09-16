export { };
// main
async function main() {
    // input
    const rl = require('readline').createInterface({ input: process.stdin });
    const readlineit = rl[Symbol.asyncIterator]();
    const readwordit = (async function* () { let vals = (await readlineit.next()).value.split(" "); for (let nx = 0; nx < vals.length; nx++) yield vals[nx]; })();
    const readline = async () => { return (await readlineit.next()).value; };
    const readword = async () => { return (await readwordit.next()).value; };
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
