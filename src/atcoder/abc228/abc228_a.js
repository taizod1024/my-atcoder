let fs = require("fs");

// util for input
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line.trim(); })();
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
const charit = (function* () { while (true) { let word = wordit.next(); if (word.done) break; for (const char of String(word.value).split("")) yield char; } })();
const readline = () => String((lineit.next()).value);
const read = () => String((wordit.next()).value);
const readchar = () => String((charit.next()).value);

// main
const main = function () {
  // param
  let s;
  let t;
  let x;

  // init
  s = Number(read());
  t = Number(read());
  x = Number(read());

  // init
  n = Number(read());

  // solve
  let ans;
  if (x < s) x += 24;
  if (t < s) t += 24;
  ans = s <= x && x < t ? "Yes" : "No";

  // answer
  console.log(ans);

  return;
};
main();
