export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let sn;
    // init
    n = Number(input.shift());
    sn = input.shift().split("");
    // solve
    let r = 0;
    for (let nx = 0; nx < n; nx++) {
        if (sn[nx] == "R") r ++;
    }
    ans = 0;
    for (let nx = n - 1; r <= nx; nx--) {
        if (sn[nx] == "R") ans ++;
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
