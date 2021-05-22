export { };
// main
function main(input: string[]): number {
    // param
    let ans: number;
    let s: string;
    s = input.shift();
    // solve
    ans = 0;
    let sn = s.split("");
    (function loop(nm: number[], mx: number) {
        if (mx < nm.length) {
            for (let nx = 0; nx < sn.length; nx++) {
                if (sn[nx] != "x") {
                    nm[mx] = nx;
                    loop(nm, mx + 1);
                }
            }
        } else {
            let ssn = Array.from(sn);
            for (let mxx = 0; mxx < nm.length; mxx ++) ssn[nm[mxx]] = "";
            if (ssn.indexOf("o") < 0) ans++;
        }
    })(new Array(4).fill(0), 0);
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
