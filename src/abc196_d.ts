import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans: number;
    let h: number, w: number, a: number, b: number;
    // init
    [h, w, a, b] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = 0;
    let hw = new Array(h).fill(null).map(() => new Array(w).fill(0));
    function go_next(x: number, y: number): number[] {
        while (true) {
            if (hw[y][x] == 0) break;
            x++;
            if (x == w) {
                x = 0;
                y++;
                if (y == h) break;
            }
        }
        return [x, y];
    }
    function check_ok(x: number, y: number) {
        if (y == h) {
            ans++;
            return true;
        }
        else {
            return false;
        }
    }
    function put_tatami2x1(x: number, y: number) {
        if (0 < a) {
            if (hw[y][x] == 0 && x < w - 1 && hw[y][x + 1] == 0) {
                hw[y][x] = 1; hw[y][x + 1] = 1; a--;
                solve(x, y);
                hw[y][x] = 0; hw[y][x + 1] = 0; a++;
            }
        }
    }
    function put_tatami1x2(x: number, y: number) {
        if (0 < a) {
            if (hw[y][x] == 0 && y < h - 1 && hw[y + 1][x] == 0) {
                hw[y][x] = 1; hw[y + 1][x] = 1; a--;
                solve(x, y);
                hw[y][x] = 0; hw[y + 1][x] = 0; a++;
            }
        }
    }
    function put_tatami1x1(x: number, y: number) {
        if (0 < b) {
            if (hw[y][x] == 0) {
                hw[y][x] = 1; b--;
                solve(x, y);
                hw[y][x] = 0; b++;
            }
        }
    }
    function solve(x: number, y: number) {
        [x, y] = go_next(x, y);
        if (check_ok(x, y)) return;
        put_tatami2x1(x, y);
        put_tatami1x2(x, y);
        put_tatami1x1(x, y);
    }
    solve(0, 0);
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
