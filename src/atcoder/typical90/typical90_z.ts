export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readiter = readline[Symbol.asyncIterator]();
    async function read() { return (await readiter.next()).value; }
    // param
    let n: number;
    let abn: number[][];
    // init
    n = Number((await read()));
    abn = new Array(n - 1).fill(null);
    for (let nx = 0; nx < n - 1; nx++) {
        abn[nx] = (await read()).split(" ").map(x => Number(x) - 1);
    }
    // solve
    let graph = new Array(n - 1).fill(null).map(x => []);
    for (let nx = 0; nx < n - 1; nx++) {
        graph[abn[nx][0]].push(abn[nx][1]);
        graph[abn[nx][1]].push(abn[nx][0]);
    }
    // WIP
    // answer
    console.log("");
    return;
}
main();
