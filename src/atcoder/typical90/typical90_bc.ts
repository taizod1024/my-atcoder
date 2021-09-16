export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const worditer = readline[Symbol.asyncIterator]();
    async function read() { return (await worditer.next()).value; }
    // param
    let n: number, p: number, q: number;
    let an: number[];
    // init
    [n, p, q] = (await read()).split(" ").map(x => Number(x));
    an = (await read()).split(" ").map(x => Number(x) % p);
    // solve
    // PENDING TLE解消できず
    let ans = 0;
    (function loop(nx = 0, rest = 5, mul = 1) {
        if (0 < rest) {
            for (; nx <= n - rest; nx++) {
                let mul0 = (mul * an[nx]) % p;
                loop(nx + 1, rest - 1, mul0);
            }
        } else {
            if (mul % p == q) ans++;
        }
    })();
    // answer
    console.log(ans);
    return;
}
main();
