export {};
// main
function main(input: string[]) {
    // param
    let ans: number;
    // init
    let h: number, w: number, k: number;
    let chw: string[][];
    [h, w, k] = input.shift().split(" ").map(x => Number(x));
    chw = input.map(x => x.split(""));
    // solve
    ans = 0;
    let ch = new Array(h).fill(0);
    let cw = new Array(w).fill(0);
    function solve(hx: number, wx:number) {
        if (hx != h) {
            ch[hx] = 0; solve(hx + 1, wx);
            ch[hx] = 1; solve(hx + 1, wx);
        } else if (wx != w) {
            cw[wx] = 0; solve(hx, wx + 1);
            cw[wx] = 1; solve(hx, wx + 1);
        } else {
            let cnt = 0;
            for (let hx = 0; hx < h; hx++) {
                if (ch[hx] == 0) continue;
                for (let wx = 0; wx < w; wx++) {
                    if (cw[wx] == 0) continue;
                    if (chw[hx][wx] == "#") cnt ++; 
                }
            }
            if (cnt == k) ans ++;    
        }
    }
    solve(0, 0)
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
