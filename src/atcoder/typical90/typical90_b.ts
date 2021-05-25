export { };
// main
function main(input: string[]) {
    // param
    let n: number;
    // init
    n = Number(input.shift());
    // solve
    (function loop(path = [], lparen = 0, rparen = 0) {
        if (path.length < n) {
            path.push("(");
            loop(path, lparen + 1, rparen);
            path.pop();
            if (lparen > rparen) {
                path.push(")");
                loop(path, lparen, rparen + 1);
                path.pop();
            }
        } else {
            if (lparen == rparen) {
                // answwer
                console.log(path.join(""));
            }
        }
    })();
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
