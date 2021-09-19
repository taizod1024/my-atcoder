// util for es6
const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }
