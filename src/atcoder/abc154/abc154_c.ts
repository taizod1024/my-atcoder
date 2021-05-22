export {};
// main
function main(input: string[]) {
    // param
    let n;
    let an;
    let ans;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    an = an.sort();
    ans = "YES";
    for (let nx = 0; nx < an.length - 1; nx++) {
        if (an[nx] == an[nx + 1]) {
            ans = "NO";
        }
    }
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; main(input); });
}
entrypoint();
