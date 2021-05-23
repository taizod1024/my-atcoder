export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let an;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = 0;
    for (let nx = 0; nx < n; nx++) {
        let a = an[nx];
        for (let lx = nx - 1; 0 <= lx && an[nx] <= an[lx]; lx--) { a += an[nx]; }
        for (let rx = nx + 1; rx < n && an[nx] <= an[rx]; rx++) { a += an[nx]; }
        ans = Math.max(ans, a);
    }
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
