import * as rl from "readline";

// util for input
const lineit = rl.createInterface({ input: process.stdin });
const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
const charit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) for (const char of word.split("")) yield await char; })();
const read = async () => String((await wordit.next()).value);
const readchar = async () => String((await charit.next()).value);

// main
const main = async function () {

    // param
    let n: number;
    let x: number, y: number;
    let an: number[], bn: number[];

    // init
    n = Number(await read());
    x = Number(await read());
    y = Number(await read());
    an = [];
    bn = [];
    for (let nx = 0; nx < n; nx++) {
        an.push(Number(await read()));
        bn.push(Number(await read()));
    }

    // solve
    let ans;
    let dp: number[][] = new Array(x + 1).fill(null).map(val => new Array(y + 1).fill(Number.MAX_SAFE_INTEGER));
    dp[0][0] = 0;
    for (let nx = 0; nx < n; nx++) {
        for (let xi = x; 0 <= xi; xi--) {
            for (let yi = y; 0 <= yi; yi--) {
                if (dp[xi][yi] != Number.MAX_SAFE_INTEGER) {
                    let xii = xi + an[nx];
                    let yii = yi + bn[nx];
                    xii = Math.min(xii, x);
                    yii = Math.min(yii, y);
                    dp[xii][yii] = Math.min(dp[xii][yii], dp[xi][yi] + 1);
                }
            }
        }
    }
    ans = dp[x][y] != Number.MAX_SAFE_INTEGER ? dp[x][y] : -1;

    // answer
    console.log(ans);

    return;

}
main();
