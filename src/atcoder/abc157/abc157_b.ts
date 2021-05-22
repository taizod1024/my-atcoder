export {};
// main
function main(input: string[]) {
    // param
    let a33: number[] = [];
    let n: number = 0;
    let bn: number[] = [];
    let ans: string = "";
    // init
    a33.push(... input.shift().split(" ").map(x => Number(x)));
    a33.push(... input.shift().split(" ").map(x => Number(x)));
    a33.push(... input.shift().split(" ").map(x => Number(x)));
    n = Number(input.shift());
    for (let nx = 0; nx < n; nx++) {
        bn[nx] = Number(input.shift());
        let bx = a33.indexOf(bn[nx]);
        if (0 <= bx) a33[bx] = 0;
    }
    ans = "No"
    if (a33[0] == 0 && a33[1] == 0 && a33[2] == 0) ans = "Yes";
    if (a33[3] == 0 && a33[4] == 0 && a33[5] == 0) ans = "Yes";
    if (a33[6] == 0 && a33[7] == 0 && a33[8] == 0) ans = "Yes";
    if (a33[0] == 0 && a33[3] == 0 && a33[6] == 0) ans = "Yes";
    if (a33[1] == 0 && a33[4] == 0 && a33[7] == 0) ans = "Yes";
    if (a33[2] == 0 && a33[5] == 0 && a33[8] == 0) ans = "Yes";
    if (a33[0] == 0 && a33[4] == 0 && a33[8] == 0) ans = "Yes";
    if (a33[2] == 0 && a33[4] == 0 && a33[6] == 0) ans = "Yes";
    // solve
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
