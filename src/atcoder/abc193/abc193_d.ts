export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let k;
    let sn;
    let tn;
    // init
    k = Number(input.shift());
    sn = input.shift().substring(0, 4).split("").map(x => Number(x));
    tn = input.shift().substring(0, 4).split("").map(x => Number(x));
    // solve
    let am = [0, k, k, k, k, k, k, k, k, k];
    let sm = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let tm = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let nx = 0; nx < sn.length; nx++) {
        am[sn[nx]]--;
        sm[sn[nx]]++;
        am[tn[nx]]--;
        tm[tn[nx]]++;
    }
    function calc(vm: number[]) {
        let val = 0;
        for (let mx = 1; mx < vm.length; mx++) {
            val += mx * Math.pow(10, vm[mx]);
        }
        return val;
    }
    let num = 0;
    let den = 0;
    for (let smx = 1; smx < sm.length; smx++) {
        if (0 < am[smx]) {
            let spat = am[smx];
            am[smx]--;
            sm[smx]++;
            for (let tmx = 1; tmx < tm.length; tmx++) {
                if (0 < am[tmx]) {
                    let tpat = am[tmx];
                    am[tmx]--;
                    tm[tmx]++;
                    den += spat * tpat; // add pattern to den
                    if (calc(sm) > calc(tm)) num += spat * tpat; // add pattern to num
                    tm[tmx]--;
                    am[tmx]++;
                }
            }
            sm[smx]--;
            am[smx]++;
        }
    }
    ans = num / den; // calc ratio
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
