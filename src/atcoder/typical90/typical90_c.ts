export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readiter = readline[Symbol.asyncIterator]();
    async function read() { return (await readiter.next()).value; }
    // param
    let n: number;
    let an: number[], bn: number[];
    // init
    n = Number(await read());
    [an, bn] = [new Array(n - 1), new Array(n - 1)];
    for (let nx = 0; nx < an.length; nx++) {
        [an[nx], bn[nx]] = (await read()).split(" ").map(x => Number(x) - 1);
    }
    // solve
    let graph = new Array(n).fill(null).map(x => []);
    for (let nx = 0; nx < n - 1; nx++) {
        graph[an[nx]].push(bn[nx]);
        graph[bn[nx]].push(an[nx]);
    }
    // 以下のコードは正しいが、TLEになったのでコメントアウト
    // let last = null;
    // let queue = [0];
    // let visited = new Array(n).fill(false);
    // while (0 < queue.length) {
    //     last = queue[0];
    //     queue.forEach(x => visited[x] = true)
    //     queue = queue.map(x => graph[x]).reduce((p, c) => p.concat(c.filter(x => !visited[x])));
    // }
    // let ans = 0;
    // queue = [last];
    // visited = new Array(n).fill(false);
    // while (0 < queue.length) {
    //     queue.forEach(x => visited[x] = true)
    //     queue = queue.map(x => graph[x]).reduce((p, c) => p.concat(c)).filter(x => !visited[x]);
    //     ans++;
    // }
    let queue = [0];
    let visited = new Array(n).fill(false);
    let last = null;
    while (0 < queue.length) {
        let queue2 = [];
        for (let g1 of queue) {
            for (let g2 of graph[g1]) {
                if (!visited[g2]) {
                    queue2.push(g2);
                }
            }
            visited[g1] = true;
            last = g1;
        }
        queue = queue2;
    }
    let ans = 0;
    queue = [last];
    visited = new Array(n).fill(false);
    while (0 < queue.length) {
        let queue2 = [];
        for (let a of queue) {
            for (let b of graph[a]) {
                if (!visited[b]) {
                    queue2.push(b);
                }
            }
            visited[a] = true;
        }
        queue = queue2;
        ans++;
    }
    // answer
    console.log(ans);
    return;
}
main();
