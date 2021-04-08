export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    // init
    n = Number(input.shift());
    // solve
    ans = 0;
    loop:
    for (let nx = 1; nx <= n; nx++) {
        for (let nx10 = nx; nx10 != 0 ; nx10 = Math.floor(nx10 / 10)) {
            if (nx10 % 10 == 7) {
                continue loop;
            }
        }
        for (let nx8 = nx; nx8 != 0 ; nx8 = Math.floor(nx8 / 8)) {
            if (nx8 % 8 == 7) {
                continue loop;
            }
        }
        ans ++;
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
