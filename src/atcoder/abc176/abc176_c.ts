export {};
// main
function main(input: string[]) {
    // param
    let n: number;
    let an: number[];
    let ans;
    // init
    n = Number(input[0]);
    an = input[1].split(" ").map(x => Number(x));
    // solve
    let b = 0;
    let h = an[0];
    for (let anx = 0; anx < an.length; anx ++) {
        if (h < an[anx]) {
            h = an[anx];
        } else if (h > an[anx]) {
            b += h - an[anx];
        } 
    }
    ans = b;
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
