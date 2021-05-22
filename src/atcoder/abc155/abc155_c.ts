export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let sn;
    // init
    n = Number(input.shift());
    sn = input;
    // solve
    sn.sort();
    // - 1st element
    let snmax = [sn[0]];
    let cntmax = 1;
    let cnt = 1;
    // - rest eleents
    for (let nx = 1; nx < n; nx++) {
        if (sn[nx - 1] == sn[nx])
            cnt++;
        else
            cnt = 1;
        if (cntmax == cnt)
            snmax.push(sn[nx]);
        else if (cntmax < cnt)
            cntmax = cnt, snmax = [sn[nx]];
    }
    ans = snmax.join("\n");
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
