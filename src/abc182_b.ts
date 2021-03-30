import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let an;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // lib
    function Math_primeList(value: number): number[] {
        var ans = [];
        var arr = new Array(value).fill(0);
        for (var i = 2; i < value; i++) {
            if (arr[i] == 0) {
                for (var j = i; j < value; j += i) {
                    if (arr[j] == 0) arr[j] = i;
                }
            }
        }
        for (var i = 2; i < value; i++) {
            if (arr[i] == i) ans.push(i);
        }
        return ans;
    }
    // solve
    let pm = Math_primeList(1000);
    let gcdmax = 0;
    for (var mx = 0; mx < pm.length; mx++) {
        let gcdnow = an.filter(x => x % pm[mx] == 0).length;
        if (gcdmax < gcdnow) {
            gcdmax = gcdnow;
            ans = pm[mx];
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
