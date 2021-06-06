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
