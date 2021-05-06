// graph lib
function GRAPH_enumPattern(cur: number[], pat: number[][]): number[][] {
    var arr = [];
    for (var patx = 0; patx < pat.length; patx++) {
        var pos = [cur[0] + pat[patx][0], cur[1] + pat[patx][1]];
        arr.push(pos);
    }
    return arr;
}
