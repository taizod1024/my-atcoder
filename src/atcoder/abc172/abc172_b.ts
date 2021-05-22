export {};
// main
function main(input: string[]) {
    // param
    let s: string;
    let t: string;
    let ans: number;
    // init
    s = input[0];
    t = input[1];
    // solve
    ans = 0;
    for (let i = 0; i < s.length; i ++) {
        if (s[i] != t[i]) ans ++;
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
