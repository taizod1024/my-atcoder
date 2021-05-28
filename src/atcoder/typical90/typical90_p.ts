export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let n: number;
    let am: number[];
    // init
    n = Number(input.shift());
    am = input.shift().split(" ").map(x => Number(x));
    // solve
    let [a, b, c] = am.sort((a1, a2) => -(a1 - a2));
    ans = 10000;
    for (let ax = 0; ax <= 9999; ax++) {
        let ac = a * ax
        if (n < ac) break;
        for (let bx = 0; bx <= 9999 - ax; bx++) {
            let bc = b * bx
            if (n < ac + bc) break;
            if ((n - ac - bc) % c != 0) continue;
            let cx = (n - ac - bc) / am[2];
            ans = Math.min(ans, ax + bx + cx);
        }
    }
    // answer
    console.log(ans);
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
