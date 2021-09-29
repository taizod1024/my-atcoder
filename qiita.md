# (2021/09)WindowsからTypeScriptでAtCoderへ参加する

WindowsからTypeScriptでAtCoderへ参加する場合の注意点をまとめてみました。

- アルゴリズムの説明はありません。
- TypeScriptの言語的な要素で自分がはまったところを中心に整理しています。
- AtCoderの他のTypeScriptでの提出された方のソースコードも参考にしています。
 
## TypeScriptでの参加について

### メリット

* 使いなれた言語で参加できる
* 適度な型チェックがされる
* vscodeでテストデータのダウンロード、ソースコードのテスト、ソースコードの提出を完結できる(宣伝)
  * https://qiita.com/taizod1024/items/cdb4b0b358959fc4596b
  
### デメリット

* スクリプト言語のため早くない
  * 対処：なし、頑張って書く
* ~~C++のSTLのようなテンプレートライブラリがない~~
  * 対処：AtCoderなら[tstl](https://www.npmjs.com/package/tstl)(TypeScript-STL)をimportできる。
* ~~TypeScriptではbigintが扱えない~~  
  * 対処：Node.js v10でbigintに対応済み。
* ~~TypeScriptではWindowsで標準入力が扱いにくい~~
  *  対処：Node.js v12で`process.stdin.fd`が追加されたことで解消済み。

## TypeScriptでの注意点

## 標準入力

Linuxの場合は `fs.readFileSync()` で `/dev/stdin` を読み取りますが、Windowsの場合には `/dev/std/` が存在しないので、代わりに `process.stdin.fd` を指定します。(Node.js v12で追加)

```TypeScript
// for windows
import * as fs from "fs";
let text = fs.readFileSync(process.stdin.fd, "utf8"); .
let line = text.split("\n");
```

readlineでも標準出力を読み取れますが、全部読み取ってから処理する必要があります。

```TypeScript
// for linux / for windows
import * as rl from "readline";
const line: string[] = [];
const reader = rl.createInterface({ input: process.stdin, output: process.stdout });
reader.on("line", function (text: string) { line.push(text); });
reader.on("close", function () {
  :
});
```

#### 変数への代入

標準入力から読み取った内容は、必要に応じて分割・変換してから文字列を変数に代入します。
分割代入することも可能です。

```TypeScript
// param
let s = line[0]; // string
let n = Number(line[1]); // number
let b = BigInt(line[2]); // bigint
let sn = line[3].split(""); // string[]
let [h, w] = line[4].split(" ").map(val => Number(val)); // 分割代入
```

ジェネレータで変数への代入を簡素にできます。
文字列を自分で分割するのに比べて多少処理コストが掛かります。

```TypeScript
// util for input
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

#### 標準出力

`console.log()` は出力件数に応じて処理時間が掛かります。

```TypeScript
// answer
for (let nx = 0; nx < 10**5; nx++) console.log(nx);
=> 420ms // 起動時のオーバーヘッド60msがあるため、実質360ms
```

出力件数が多い場合は文字列化として結合してから一回で出力します。

```TypeScript
// answer
let ans = "";
for (let nx = 0; nx < 10**5; nx++) ans += nx + "\n";
console.log(ans);
=> 80ms // 起動時のオーバーヘッド60msのため、実質20ms
```

### 型

#### number

数値には numberを使用します。

numberの安全な整数の最大値は`Number.MAX_SAFE_INTEGER` =2^53-1 (≒9.0*10^15)です。
注意が必要なのは、`Number.MAX_SAFE_INTEGER`を超えてもエラーにならないことです。
丸められた数字で処理が継続されます。

**注意：ロジックに自信があるソースコードを提出してなぜか`WA`になる場合は、numberを超えてないかを疑います。制約を確認して 10^15 を超えているか、10^9 同士の乗算があればbigintを使用します。**


### bigint

numberを超える数値にはbigintを使用します。(Node.js v10で追加)  

```TypeScript
let b1 = BitInt(100);     // コンストラクタでbigintを生成
let b2 = 100n;            // リテラルのbigint
let b3 = b1 + b2;         // bigint同士でのみ演算可能
```

bigintのリテラル表現は `0n`, `1n`, `2n` です。(ES2020以降で対応)  
出力時は文字列化して`n`を削除します。

```TypeScript
let ans = b3.toString().replace("n", ""); // 文字列化してnを削除
console.log(ans);                         // 結果を文字列で出力
```

### 配列

数列や文字列配列を格納する場合に使用します。

```TypeScript
let an: number[] = []; // 空の配列
let bn: number[] = new Array(n); // 長さnの配列、ただしデータが入ってない
let cn: number[] = new Array(n).fill(0); // 0で初期化された長さnの配列
let dmn: number[][] = new Array(m).fill(null).map(() => new Array(n).fill(0)); // 二次元配列はfill()を入れないとおかしな配列になる

```

**注意：`new Array(n)`だけした配列で`Array.prototype.map()`や`Array.prototype.forEach()`を実行しても一回も処理されません。for-loopで処理するか、事前に`fill()`してください。**


素朴に`Array.prototype.shift()`や`Array.prototype.splice()`を使用するとデータ量に応じて時間が掛かります。

```TypeScript
// atcoderのコードテストで計測
let an = new Array(10**5).fill(null).map((val, idx) => idx);    // オーバーヘッド
for (let nx = 0; nx < 10**5; nx++) an.push(nx);       => 64ms   // 起動時のオーバーヘッド60msがあるため、実質4ms
for (let nx = 0; nx < 10**5; nx++) an.poph();         => 64ms   // 起動時のオーバーヘッド60msがあるため、実質4ms
for (let nx = 0; nx < 10**5; nx++) an.shift();        => 779ms  // 起動時のオーバーヘッド60msがあるため、実質729ms
for (let nx = 0; nx < 10**5; nx++) an.unshift(nx);    => 3252ms // 起動時のオーバーヘッド60msがあるため、実質3192ms
for (let nx = 0; nx < 10**5; nx++) an.splice(nx, 1);  => 1611ms // 起動時のオーバーヘッド60msがあるため、実質1591ms

```

数値配列の最大値・最小値は`Math.max()`, `Math.min()`でスプレッド構文を使用して取得できます。ただし、スプレッド構文では数値配列の要素数分スタックに積まれるためスタックオーバーフローになる可能性があります。10^4個以上の配列の最大値・最小値を`Array.prototype.reduce()`を使用します。

```TypeScript
let an = [ 3, 2, 1 ];
let max = Math.max(...an); // スプレッド構文で配列を引数に展開
let min = an.reduce((pval, cval) => Math.min(pval, cval)); // Array.prototype.reduce()で順番にMath.min()してを単一要素に集約
```

配列の並べ替えには`Array.prototype.sort()`を使用します。文字列以外は比較対象に応じた比較関数を指定します。

```TypeScript
let an = [ "c", "b", "a" ];
let bn = [ 3, 2, 1];
let cn = [ 3n, 2n, 1n ];
an.sort(); // 文字列として昇順に並べ替え
=> [ "a", "b", "c" ]
bn.sort((a, b) => a - b); // 数値として昇順に並べ替え
=> [ 1, 2, 3 ]
cn.sort((a, b) => a - b); // エラー、a - bがbigintのまま、numberを返す必要あり
=> ERROR
cn.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0); // bigintとして昇順に並べ替え
=> [ 1n, 2n, 3n ]
```
- 配列同士の比較をする場合は`JSON.stringify()`で代用します。列挙順が保証されている単純な配列に限られるがAtCoderの範囲ではこれで十分です。

``` TypeScript
if (JSON.stringify(an) == JSON.stringify(bn)) ...
```

### string

文字列はstringを使用します。
連想配列はMap<S,T>()を使用します。
- 集合はSet<T>()を使用します。
- テンプレートライブラリを使用する
  - C++のSTL((Standard Template Library)のようなデファクトのテンプレートライブラリはない。
  - npmに[tstl](https://www.npmjs.com/package/tstl)(TypeScript-STL)があるので代用する。
  ```
  // tsconfig.jsonにmoduleResolution:Nodeを指定する
  import * as tstl from "tstl";
  let tree = new tstl.TreeSet<number>([0, l]);
  ```

### スコープ

- ファイルスコープ

### レンジ

TypeScriptにはレンジがありません。

```TypeScript
// util for es6
const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }
```

### その他

- 他の言語に比べて初期起動に時間が掛かる。
  - C言語の場合、10ms程度
  - TypeScriptの場合、60ms程度
- 呼出
  - スプレッド構文が長すぎるとスタックオーバーフローになる。
  - 再帰呼出でスタックオーバーフローになる。TypeScriptは末尾再帰が最適化されない。
- スコープ
  - varは関数スコープになるので注意。
  - 変数はvarで定数はconstで宣言することでブロックスコープになる。
- 精度
  - 除算が含まれる場合（百分率等）は、誤差が出ないようにすべて乗算して算出、比較する
  - 精度が与えられている場合（高々小数第4位等）は、整数化して計算する
- Math.min(), Math.max()で値を更新
- レンジ関数
- 三項演算子