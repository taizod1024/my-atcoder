// main
function main(input: string[]) {
    // param
    var x: number[];
    var ans: number;
    // init
    x = input.shift().split(" ").map(x => Number(x));
    ans = 0;
    // solve
    for (var i = 0; i < x.length; i++) {
        if (x[i] == 0) {
            ans = i + 1;
            break;
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
