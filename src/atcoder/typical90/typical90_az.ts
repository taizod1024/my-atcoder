export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const reader = readline[Symbol.asyncIterator]();
    async function read() { return (await reader.next()).value; }
    // param
    let n: number;
    let anm: number[][];
    // init
    n = Number((await read()));
    anm = [];
    for (let nx = 0; nx < n; nx++) {
        anm.push((await read()).split(" ").map(x => Number(x)));
    }
    // solve
    let ans = 1;
    for (let nx = 0; nx < n; nx++) {
        ans = (ans * anm[nx].reduce((prev, curr) => prev + curr)) % 1000000007;
    }
    // answer
    console.log(ans);
    return;
}
main();
