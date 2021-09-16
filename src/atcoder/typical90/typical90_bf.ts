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
    let n: number, k: bigint;
    // init
    [n, k] = [Number(await readword()), BigInt(await readword())];
    // solve
    // PENDING WA1件解消できず
    // make array
    let an = new Array(100000);
    for (let nx = 0, n0 = 0; n0 < 10; n0++) {
        for (let n1 = 0; n1 < 10; n1++) {
            for (let n2 = 0; n2 < 10; n2++) {
                for (let n3 = 0; n3 < 10; n3++) {
                    for (let n4 = 0; n4 < 10; n4++) {
                        an[nx] = (nx + n0 + n1 + n2 + n3 + n4) % an.length;
                        nx++;
                    }
                }
            }
        }
    }
    // push button
    let bn = new Array(100000).fill(-1);
    let nx = n;
    let loop = false;
    for (let nxx = 0; nxx < k; nxx++) {
        // detect loop
        if (!loop) {
            // check mark
            if (bn[nx] == -1) {
                bn[nx] = nxx;
            }
            // skip loop
            else {
                loop = true;
                k = BigInt(nxx) + (k - BigInt(bn[nx])) % BigInt(nxx - bn[nx]);
            }
        }
        // next value
        nx = an[nx]
    }
    // answer
    console.log(nx);
    return;
}
main();
