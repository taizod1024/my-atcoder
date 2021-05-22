// graph lib
function GRAPH_enumPattern(cur: number[], pat: number[][]): number[][] {
    let arr = [];
    for (let patx = 0; patx < pat.length; patx++) {
        let pos = [cur[0] + pat[patx][0], cur[1] + pat[patx][1]];
        arr.push(pos);
    }
    return arr;
}
