// main
(async () => {
    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const lineiter = readline[Symbol.asyncIterator]();
    const readiter = (async function* () { for await (const line of lineiter) for (const word of line.split(" ")) yield await word; })();
    const read = async () => (await readiter.next()).value;
    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }
    // param
    let n: number, m: number;
    let am: number[] = [], bm: number[] = [], cm: number[] = [];
    // init
    n = Number(await read());
    m = Number(await read());
    for (let mi of startlen(0, m)) {
        am.push(Number(await read()) - 1);
        bm.push(Number(await read()) - 1);
        cm.push(Number(await read()));
    }
    // solve
    // step 1
    let ln = new Array(n).fill(null).map(x => []);
    for (let mx of startlen(0, m)) {
        ln[am[mx]].push([bm[mx], cm[mx]]);
        ln[bm[mx]].push([am[mx], cm[mx]]);
    }
    // step 2
    function dijkstra(start) {
        let cost = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        let queue = [];
        let visited = new Array(n).fill(false);
        let queued = new Array(n).fill(false);
        // first node
        cost[start] = 0;
        queued[start] = true;
        queue.push(start);
        while (queue.length) {
            queue.sort((a, b) => cost[b] - cost[a]); // WIP TLE
            let current = queue.pop();
            visited[current] = true;
            for (let [next, nextcost] of ln[current]) {
                if (visited[next]) continue;
                visited[current] = true;
                cost[next] = Math.min(cost[next], cost[current] + nextcost);
                if (queued[next]) continue;
                queued[next] = true;
                queue.push(next);
            }
        }
        return cost;
    }
    // step 3
    let cn1 = dijkstra(0);
    let cn2 = dijkstra(n - 1);
    for (let nx of startlen(0, n)) {
        // answer
        console.log(cn1[nx] + cn2[nx]);
    }
    return;
})();
