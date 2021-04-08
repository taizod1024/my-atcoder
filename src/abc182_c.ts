// main
function main(input: string[]) {
    // param
    let ans;
    let nm;
    // init
    nm = input.shift().split("").map(x => Number(x));
    // solve
    let sum = 0;
    let mod = [0, 0, 0];
    for (var mx = 0; mx < nm.length; mx++) {
        sum += nm[mx];
        mod[nm[mx] % 3]++;
    }
    if (sum % 3 == 1) {
        if (1 <= mod[1] && 1 < nm.length) {
            ans = 1;
        } else if (2 <= mod[2] && 2 < nm.length) {
            ans = 2;
        } else {
            ans = -1;
        }
    } else if (sum % 3 == 2) {
        if (1 <= mod[2] && 1 < nm.length) {
            ans = 1;
        } else if (2 <= mod[1] && 2 < nm.length) {
            ans = 2;
        } else {
            ans = -1;
        }
    } else {
        ans = 0;
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
