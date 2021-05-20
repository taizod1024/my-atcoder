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
    for (let n0 = 0; n0 < 10; n0++) {
        if (sn[n0] == "x") continue;
        for (let n1 = 0; n1 < 10; n1++) {
            if (sn[n1] == "x") continue;
            for (let n2 = 0; n2 < 10; n2++) {
                if (sn[n2] == "x") continue;
                for (let n3 = 0; n3 < 10; n3++) {
                    if (sn[n3] == "x") continue;
                    let cn = Array.from(sn);
                    cn[n0] = "-";
                    cn[n1] = "-";
                    cn[n2] = "-";
                    cn[n3] = "-";
                    if (0 <= cn.indexOf("o")) continue;
                    ans ++;
                }
            }
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
