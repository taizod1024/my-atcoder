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
    let a: number, b: number, c: number;
    // init
    [a, b, c] = [Number(await readword()), Number(await readword()), Number(await readword())];
    // solve
    let ans;
    if ( a==b) ans = c;
    else if (b == c) ans =a;
    else if (c == a) ans = b;
    else ans = 0;
    // answer
    console.log(ans);
    return;
}
main();
