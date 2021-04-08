// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let xn, yn;
    // init
    n = Number(input.shift());
    [xn, yn] = [new Array(n), new Array(n)];
    for (let nx = 0; nx < n; nx++) {
        [xn[nx], yn[nx]] = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    ans = 0;
    for (let nx = 0; nx < n; nx ++) {
        for (let nnx = nx + 1; nnx < n; nnx++) {
            let x0 = xn[nx] - xn[nnx];
            let y0 = yn[nx] - yn[nnx];
            if (x0 != 0) {
                let a0 = y0 / x0;
                if (-1 <= a0 && a0 <= 1) {
                    ans ++;
                }
            }

        }
    }
    // answer
    return ans;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
