let fs = require("fs");

// util for input
const lineit = (function* () {
  for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n"))
    yield line.trim();
})();
const wordit = (function* () {
  while (true) {
    let line = lineit.next();
    if (line.done) break;
    for (const word of String(line.value).split(" ")) yield word;
  }
})();
const charit = (function* () {
  while (true) {
    let word = wordit.next();
    if (word.done) break;
    for (const char of String(word.value).split("")) yield char;
  }
})();
const readline = () => String(lineit.next().value);
const read = () => String(wordit.next().value);
const readchar = () => String(charit.next().value);

// main
const main = function () {
  // param
  let s;
  
  // init
  s = read();

  // solve
  let ans = "Hello World!";
  
  // answer
  console.log(ans);

  return;

};
main();
