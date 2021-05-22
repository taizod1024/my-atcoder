export {};
// main
function main(input: string[]) {
    // param
    let n, x, m;
    let ans;
    // init
    [n, x, m] = input.shift().split(" ").map(x => Number(x));
    // solve
    // #1
    // let an = 0;
    // ans = 0;
    // for (let nx = 1; nx <= n; nx++) {
    //     if (nx == 1) {
    //         an = x;
    //     } else {
    //         an = (an % m) * (an % m) % m;
    //     }
    //     ans += an;
    // }
    // #2
    let xm = new Array(m + 1).fill(-1); // init index
    let sm = new Array(m + 1).fill(-1); // init sum
    let an = 0; // init an
    ans = 0; // init sum
    for (let nx = 1; nx <= n; nx++) {
        // init a1
        if (nx == 1) {
            an = x;
        }
        // init a2 ...
        else {
            an = (an * an) % m;
        }
        // detecting loop ...
        if (xm[an] < 0) {
            xm[an] = nx; // save current index
            sm[an] = ans; // save current sum
            ans += an; // update ans
        }
        // loop detected
        else {
            let s = nx - xm[an]; // get loop size
            let t = Math.floor((n - nx) / s); // get loop count
            ans += an + (ans - sm[an]) * t; // update ans
            nx += s * t; // update index
            xm = new Array(m + 1).fill(-1); // reset index
            sm = new Array(m + 1).fill(-1); // reset sum
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
