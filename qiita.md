# TypeScriptでAtCoderへ参加する場合の注意点

2021年9月時点でTypeScriptでAtCoderへ参加する場合の注意点をまとめてみました。

- アルゴリズムの説明はほぼありません。
- TypeScriptの言語的な要素で自分がはまったところを中心に整理しています。
- AtCoderの他のTypeScriptでの提出された方のソースコードも参考にしています。
 
## TypeScriptでの参加について

### メリット

* 使いなれた言語で参加できる
* 型チェックができる
* vscodeでAtCoderからのテストデータのダウンロード、ソースコードのテスト、ソースコードの提出を完結できる（宣伝）
  * https://qiita.com/taizod1024/items/cdb4b0b358959fc4596b
  
### デメリット

* スクリプト言語なので高速とはいえない
  * **【対処】なし、頑張って書く**
* ~~TypeScriptではWindowsで標準入力が扱いにくい~~
  *  **【対処】Node.js v12で`process.stdin.fd`が追加されたことで解消**
* ~~TypeScriptではbigintが扱えない~~  
  * **【対処】Node.js v10でbigintに対応**
* ~~TypeScriptにはC++のSTLのようなテンプレートライブラリがない~~
  * **【対処】AtCoderなら[tstl](https://www.npmjs.com/package/tstl)(TypeScript-STL)をimportできる**

## TypeScriptでの注意点

### スコープ

- ファイルモジュール
  - 他の提出用のソースコードと名前空間が重複しvscodeが警告を出力する場合があります。ライブラリを読み込むときに`import`を使用すると、ソースコードがTypeScriptにファイルモジュールと認識され、自動的にローカルスコープが作成され回避することができます。ライブラリの読み込みに`require()`を使用しているとそうならないので注意してください。
- 関数スコープ
  - 基本的に`var`は使用しません。
- ブロックスコープ
  - 変数は`let`、定数は`const`で宣言して使用します。

### 起動時間

他の言語に比べて初期起動に時間が掛かります。以下は、AtCoderでの起動時間の比較です。

- C言語の場合、10ms程度
- TypeScriptの場合、60ms程度

### 標準入力

標準入力から入力は `fs.readFileSync()` を使用します。Windowsの場合には `/dev/std/` の代わりに `process.stdin.fd` を指定します。(Node.js v12で追加)

```TypeScript
// input
import * as fs from "fs";
let text = fs.readFileSync(process.stdin.fd, "utf8"); .
let line = text.split("\n");
```

`readline.createInterface()`を使用することもできます。標準入力を最後まで読み終えてから処理します。

```TypeScript
// input
import * as rl from "readline";
const line: string[] = [];
const reader = rl.createInterface({ input: process.stdin, output: process.stdout });
reader.on("line", function (text: string) { line.push(text); });
reader.on("close", function () {
  :
});
```

### 変数への代入

標準入力から読み取った内容は、必要に応じて分割・変換してから変数に代入します。
分割代入することも可能です。

```TypeScript
// param
let s = line[0]; // string
let n = Number(line[1]); // number
let b = BigInt(line[2]); // bigint
let sn = line[3].split(""); // string[]
let [h, w] = line[4].split(" ").map(val => Number(val)); // 分割代入
```

ジェネレータを定義しておくと標準入力から変数への代入を簡素にできます。
ただし、文字列を自分で分割するのに比べて多少処理コストが掛かります。

```TypeScript
// input
import * as fs from "fs";
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line; })();
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
const charit = (function* () { while (true) { let word = wordit.next(); if (word.done) break; for (const char of String(word.value).split("")) yield char; } })();
const readline = () => String((lineit.next()).value);
const read = () => String((wordit.next()).value);
const readchar = () => String((charit.next()).value);

// param
let s = read(); // string
let n = Number(read()); // number
let b = BigInt(read()); // bigint
let sn = [...Array(n)].map(() => Number(read()); // string[]
let [h, w] = [Number(read()), Number(read())]; // 分割代入
```

### 標準出力

標準出力への出力は`console.log()`を使用します。

```TypeScript
// answer
for (let nx = 0; nx < 10**5; nx++) console.log(nx);
=> 420ms // 起動時のオーバーヘッド60msがあるため、実質360ms
```

出力件数が多い場合は文字列として結合してから一回で出力します。


```TypeScript
// answer
let ans = "";
for (let nx = 0; nx < 10**5; nx++) ans += nx + "\n";
console.log(ans);
=> 80ms // 起動時のオーバーヘッド60msのため、実質20ms
```

### number

数値には numberを使用します。

numberの安全な整数の最大値は`Number.MAX_SAFE_INTEGER` =2^53-1 (≒9.0*10^15)です。

- **【注意】あくまで整数として正しく扱えるのが`Number.MAX_SAFE_INTEGER`までであり、`Number.MAX_SAFE_INTEGER`を超えてもエラーにはならず、丸められた数字で処理が継続されます。制約を確認してnumberの範囲で処理するよう工夫するか、10^15 を超えているか、10^9 同士の乗算があればbigintを使用します。**


### bigint

numberを超える数値にはbigintを使用します。(Node.js v10で追加)  
bigintのリテラル表現は `0n`, `1n`, `2n` です。(ES2020以降で対応)  


```TypeScript
let b1 = BitInt(100);     // コンストラクタでbigintを生成
let b2 = 100n;            // bigintのリテラル表現
let b3 = b1 + b2;         // bigint同士でのみ演算可能
```

出力時は文字列化して`n`を削除します。

```TypeScript
let ans = b3.toString().replace("n", ""); // 文字列化してnを削除
console.log(ans);                         // 結果を文字列で出力
```

### 配列

数列や文字列配列を格納する場合に使用します。

```TypeScript
let an: number[] = []; // 空の配列
let bn: number[] = new Array(n); // 長さnの配列、ただし要素が入ってない
let cn: number[] = new Array(n).fill(0); // 0で初期化された長さnの配列

let dmn: number[][] = new Array(m).map(() => new Array(n).fill(0)); // 二次元配列作成失敗、ループが回らない
let dmn: number[][] = new Array(m).fill(new Array(n).fill(0));      // 二次元配列作成失敗、すべての行が同一オブジェクト
let dmn: number[][] = new Array(m).fill(null).map(() => new Array(n).fill(0)); // 二次元配列作成成功

```

- **【注意】一次元配列の場合、`new Array(n)`後に`.fill()`しないと`.map()`してもループが回らない**
- **【注意】二次元配列の場合、`new Array(m)`後に`.fill(new Array(n).fill(0))` だと、すべての行が同一オブジェクトを指す。`.fill(null).map(() => new Array(n).fill(0))`で行ごとにオブジェクトを生成する**

#### 配列の操作

配列の操作にはデータ量に応じて時間が掛かる操作があります。データ量が多い場合は処理時間を削減するために`.shift()`や`.splice()`は避けます。

```TypeScript
// atcoderのコードテストで計測
let an = new Array(10**5).fill(null).map((val, idx) => idx);
for (let nx = 0; nx < 10**5; nx++) an.push(nx);
=> 64ms   // 起動時のオーバーヘッド60msがあるため、実質4ms
for (let nx = 0; nx < 10**5; nx++) an.poph();
=> 64ms   // 起動時のオーバーヘッド60msがあるため、実質4ms
for (let nx = 0; nx < 10**5; nx++) an.indexOf(nx);
=> 300ms  // 起動時のオーバーヘッド60msがあるため、実質240ms
for (let nx = 0; nx < 10**5; nx++) an.shift();
=> 779ms  // 起動時のオーバーヘッド60msがあるため、実質729ms
for (let nx = 0; nx < 10**5; nx++) an.splice(nx, 1);
=> 1611ms // 起動時のオーバーヘッド60msがあるため、実質1591ms
for (let nx = 0; nx < 10**5; nx++) an.unshift(nx);
=> 3252ms // 起動時のオーバーヘッド60msがあるため、実質3192ms

```

#### 配列の最大値・最小値

数値配列の最大値・最小値は`Math.max()`, `Math.min()`でスプレッド構文を使用できますが、スプレッド構文では配列の要素数分スタックに積むためスタックオーバーフローになる可能性があります。データ量が多い場合はスタックオーバーフローを避けるために`.reduce()`を使用して2個ずつ値を比較します。

```TypeScript
let an = [...Array(10**5)].map((val, idx) => idx);
let max = Math.max(...an);
=> OK

let an = [...Array(10**6)].map((val, idx) => idx);
let max = Math.max(...an);
=> RangeError: Maximum call stack size exceeded

let an = [...Array(10**6)].map((val, idx) => idx);
let max = an.reduce((pval, cval) => Math.max(pval, cval)); // .reduce()で順番にMath.max()してを単一要素に集約
=> OK
```

#### 配列の並べ替え

配列の並べ替えには`.sort()`を使用します。文字列以外は比較対象に応じた比較関数を指定します。

```TypeScript
let an = [ "c", "b", "a" ];
let bn = [ 3, 2, 1];
let cn = [ 3n, 2n, 1n ];
an.sort(); // 文字列として昇順に並べ替え
=> [ "a", "b", "c" ]
bn.sort((a, b) => a - b); // 数値として昇順に並べ替え
=> [ 1, 2, 3 ]
cn.sort((a, b) => a - b); // エラー、a - bがbigintのまま、numberを返す必要あり
=> NG
cn.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0); // bigintとして昇順に並べ替え
=> [ 1n, 2n, 3n ]
```

#### 配列の重複削除

配列の重複する要素を削除するためには`Array.from(new Set())`を使用します。

```TypeScript
let an = [ 3, 1, 3, 2, 1 ];
let bn = Array.from(new Set(an));
=> [ 3, 1, 2 ]
```

### 配列の比較

配列同士の比較をする場合は`JSON.stringify()`を使用します。列挙順が保証されている単純な配列に限られますがAtCoderの範囲ではこれで十分です。

``` TypeScript
if (JSON.stringify(an) == JSON.stringify(bn)) ...
```

### 関数呼出


TypeScriptは末尾再帰が最適化されません。末尾再帰を期待した書き方ではスタックオーバーフローになります。

### Range関数

TypeScriptにはRange関数はありません。あると楽だなと思う場面はときどきあります。

```TypeScript
// range with generator
const range = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
for (const val of range(13, 15)) {
  console.log(val);
}
=> 13
   14
   15

// range with Array.from()
const range = (from, to) => (from <= to) ? Array.from(Array(to - from + 1), (val, idx) => from + idx) : [];
for (const val of range(13, 15)) {
  console.log(val);
}
=> 13
   14
   15
```

### テンプレートライブラリ

TypeScriptには C++のSTL((Standard Template Library)のようなデファクトのテンプレートライブラリはありません。npmに[tstl](https://www.npmjs.com/package/tstl)(TypeScript-STL)があるので代用します。

以下は、[abc217_d](https://atcoder.jp/contests/abc217/tasks/abc217_d)をtstlを使用して実装した例です。tstlを使用しないとb-treeを自前で実装する必要がありますが、tstlを使用すると順序付き集合TreeSetを使用してシンプルに実装できます。

```TypeScript
// abc217_d.ts

// input
import * as fs from "fs";
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line; })();
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
const charit = (function* () { while (true) { let word = wordit.next(); if (word.done) break; for (const char of String(word.value).split("")) yield char; } })();
const readline = () => String((lineit.next()).value);
const read = () => String((wordit.next()).value);
const readchar = () => String((charit.next()).value);

// standard template library
import * as tstl from "tstl";

// main
const main = function () {

    // param
    let l: number, q: number;
    let cq: number[] = [], xq: number[] = [];

    // init
    l = Number(read());
    q = Number(read());
    for (let qx = 0; qx < q; qx++) {
        cq.push(Number(read()));
        xq.push(Number(read()));
    }

    // // solve
    let ansn = [];
    let tree = new tstl.TreeSet<number>([0, l]);
    for (let qx = 0; qx < q; qx++) {
        if (cq[qx] == 1) {
            tree.insert(xq[qx]);
        } else {
            const it = tree.lower_bound(xq[qx]);
            ansn.push(it.value - it.prev().value);
        }
    }
    let ans = ansn.join("\n");

    // answer
    console.log(ans);

    return;

};
main();
```
