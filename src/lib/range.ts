// range lib
function* range_a(from: number, to: number, step = 1) {
    for (let x = from; x <= to; x += step) yield x;
}
function* range_b(start: number, length: number, step = 1) {
    for (let x = start; x < start + length; x += step) yield x;
}
