export { };
// main
function main(input: string[]) {
    // param
    let t: number;
    let l: number, x: number, y: number;
    let q: number;
    let eq: number[];
    // init
    t = Number(input.shift());
    [l, x, y] = input.shift().split(" ").map(x => Number(x));
    q = Number(input.shift());
    eq = input.map(x => Number(x));
    // solve
    function position(tnow: number): number[] {
        tnow %= t;
        let x = 0;
        let y = - Math.sin(2 * Math.PI / t * tnow) / 2 * l;
        let z = (1 - Math.cos(2 * Math.PI / t * tnow)) / 2 * l;
        return [x, y, z];
    }
    let [x0, y0, z0] = [x, y, 0];
    for (let qx = 0; qx < q; qx++) {
        let [x1, y1, z1] = position(eq[qx]);
        let r = Math.sqrt((x0 - x1) ** 2 + (y0 - y1) ** 2);
        let ans = Math.atan((z1 - z0) / r) / (2 * Math.PI) * 360;
        // answer
        console.log(ans);
    }
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
