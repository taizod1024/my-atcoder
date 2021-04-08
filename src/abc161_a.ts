// main
function main(input: string[]) {
    // param
    var x: number = 0;
    var y: number = 0;
    var z: number = 0;
    var ans: string = "";
    // init
    [x, y, z] = input.shift().split(" ").map(x => Number(x));
    // solve
    [x, y] = [y, x];
    [x, z] = [z, x];
    ans = x + " " + y + " " + z;
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
