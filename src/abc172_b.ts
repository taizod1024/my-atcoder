// main
function main(input: string[]) {
    // param
    var s: string;
    var t: string;
    var ans: number;
    // init
    s = input[0];
    t = input[1];
    // solve
    ans = 0;
    for (var i = 0; i < s.length; i ++) {
        if (s[i] != t[i]) ans ++;
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
