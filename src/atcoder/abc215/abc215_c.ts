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
    let s: string;
    let k: number;

    // init
    s = await read();
    k = Number(await read());

    // solve

    // 順列生成
    function perm<T>(an: T[]): T[][] {
        if (an.length == 1) return [an];
        let zm = [];
        for (let nx = 0; nx < an.length; nx++) {
            const head = an[nx];
            const rest = [...an];
            rest.splice(nx, 1);
            for (const bn of perm(rest)) {
                zm.push([head, ...bn]);
            }
        }
        return zm;
    }
    let sn = Array.from(new Set(perm<string>(s.split("")).map(val => val.join("")))).sort();
    
    let ans = sn[k - 1];

    // answer
    console.log(ans);

    return;

};
main();
