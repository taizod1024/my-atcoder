import { type } from "os";

// main
(async () => {

    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const lineit = readline[Symbol.asyncIterator]();
    const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
    const read = async () => String((await wordit.next()).value);

    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }

    // param
    let n: number, m: number;
    let am: number[] = [], bm: number[] = [], cm: number[] = [];

    // init
    n = Number(await read());
    m = Number(await read());
    for (const mi of startlen(0, m)) {
        am.push(Number(await read()) - 1);
        bm.push(Number(await read()) - 1);
        cm.push(Number(await read()));
    }

    // solve

    // step 1
    type edge = { node: node, cost: number };
    type node = { index: number, cost: number, edges: edge[] };
    let nodes: node[] = new Array(n).fill(null).map((val, idx) => { return { index: idx, cost: 0, edges: [] }; });
    for (const mx of startlen(0, m)) {
        nodes[am[mx]].edges.push({ node: nodes[bm[mx]], cost: cm[mx] });
        nodes[bm[mx]].edges.push({ node: nodes[am[mx]], cost: cm[mx] });
    }

    // step 2
    function dijkstra(start) {
        nodes.forEach(node => node.cost = Number.MAX_SAFE_INTEGER);
        let queue: node[] = [];
        let visited = new Set();
        // first node
        nodes[start].cost = 0;
        queue.push(nodes[start]);
        while (queue.length) {
            // current node
            let current = queue.pop();
            if (visited.has(current.index)) continue;
            visited.add(current.index);
            // next node
            for (const e of current.edges) {
                if (e.node.cost <= current.cost + e.cost) continue;
                e.node.cost = current.cost + e.cost;
                queue.push(e.node);
            }
            // sort
            queue.sort((a, b) => b.cost - a.cost); // WIP TLE
        }
        return nodes;
    }

    // step 3
    let cn1 = dijkstra(0).map(node => node.cost);
    let cn2 = dijkstra(n - 1).map(node => node.cost);
    for (const nx of startlen(0, n)) {
        // answer
        console.log(cn1[nx] + cn2[nx]);
    }

    return;

})();
