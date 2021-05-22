export { };
// main
function main(input: string[]): string {
    // param
    let ans: string;
    let an: number[];
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    an.sort((a, b) => a - b);
    ans = (an[0] - an[1] == an[1] - an[2]) ? "Yes" : "No";
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
