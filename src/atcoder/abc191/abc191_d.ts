export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let x, y, r;
    // init
    [x, y, r] = input.shift().split(" ").map(x => Number(x));
    // solve
    const d4 = 10000;
    const d4n = 10000n;
    x = BigInt(x * d4);
    y = BigInt(y * d4);
    r = BigInt(r * d4);
    let yt = y - r - (y - r) % d4n;
    let yb = y + r - (y + r) % d4n;
    let cnt = 0;
    // console.log("x=", x, "y=", y, "r=", r);
    // console.log("yt=", yt);
    // console.log("yb=", yb);
    for (let y0 = yt; y0 <= yb; y0 += d4n) {
        let x0 = Math_bigintsqrt(r * r - (y0 - y) * (y0 - y));
        // console.log("x - x0=", x - x0);
        // console.log("x + x0=", x + x0);
        let xl = x - x0 - (x - x0) % d4n;
        let xr = x + x0 - (x + x0) % d4n;
        // console.log("y0=", y0);
        // console.log("xl=", xl);
        // console.log("xr=", xr);
        cnt += Number((xr - xl) / d4n) + 1;
        // console.log("cnt=", cnt);
        // console.log("----");
    }
    ans = cnt;
    // answer
    console.log(ans);
}
// lib
function Math_bigintsqrt(value: bigint) {
    if (value < 2n) {
      return value
    }
   
    if (value < 16n) {
      return BigInt(Math.floor(Math.sqrt(Number(value))))
    }
   
    if (value < 1n << 52n) {
      let x1 = BigInt(Math.floor(Math.sqrt(Number(value)))) - 3n
    } else {
      let x1 = (1n << 52n) - 2n
    }
   
    let x0 = -1n
    while (x0 !== x1 && x0 !== x1 - 1n) {
      x0 = x1
      x1 = (value / x0 + x0) >> 1n
    }
    return x0
  }
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
