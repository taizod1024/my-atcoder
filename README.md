# atcoder

AtCoder提出ソースコード個人リポジトリ

- 解答状況は[AtCoder Problems](https://kenkoooo.com/atcoder/#/table/taizod1024)で確認

### TypeScriptの注意点

- 標準入力
    - Windowsには`/dev/std/`が存在しない。代わりにprocess.stdin.fdを指定する。(Node.js v12で追加)
      ```
      // linux
      import * as fs from "fs";
      let text = fs.readFileSync("/dev/stdin", "utf8"); .
      ```
      ```
      // windows
      import * as fs from "fs";
      let text = fs.readFileSync(process.stdin.fd, "utf8"); .
      ```
- 処理時間
  - 他の言語に比べて初期起動に時間が掛かる。
    - C言語の場合、10ms程度
    - TypeScriptの場合、60ms程度
  - console.log()の都度出力に時間が掛かる。
    - ローカルでは正常動作しても提出すると`TLE`になる。1万件で500ms程度。
    - 文字列として連結してから一括で出力する。
- 配列
  - 大きな配列の作成には時間が掛かる。
    - 10^6件程度で`TLE`になる。
    - Array.prototype.push()を使用するなどして回避する。
  - 配列の操作には時間が掛かるものと掛からないものがある。
    - 時間が掛かるもの：Array.prototype.shift()、Array.prototype.splice()
    - 時間が掛からないもの：Array.prototype.push()、Array.prototype.pop()
  - 二次元配列の作り方には注意する。
    ```
    let tmn = new Array(m).fill(new Array(n)); // fill()は一回しか実行されない、全て同一オブジェクトになる
    let tmn = new Array(m).fill(null).map(val => new Array(n)); // map()で個々にオブジェクトを生成する
    ```
  - 配列同士の比較をする場合はJSON.stringify()で代用する
    - 列挙順が保証されている単純な配列に限られるがAtCoderの範囲ではこれで十分。
    ```
    if (JSON.stringify(an) == JSON.stringify(bn)) ...
    ```
- 型
  - Number型を超える数値はBigInt型で扱う。(Node.js v10で追加)
    - BigIntのリテラルは`0n, 1n, 2n`(ES2020以降で対応)
    - console.log()でのBigInt出力時は文字列化して`n`を削除する。
    ```
    let a = BitInt(100);
    let b = 100n;
    let c = a + b;
    console.log(c.toString().replace("n", "");
    ```
  - テンプレートライブラリを使用する
    - C++のSTL((Standard Template Library)のようなデファクトのテンプレートライブラリはない。
    - npmに[tstl](https://www.npmjs.com/package/tstl)(TypeScript-STL)があるので代用する。
- その他
  - スコープ
    - varは関数スコープになるので注意。
    - 変数はvarで定数はconstで宣言することでブロックスコープになる。
  - 末尾再帰
    - TypeScriptは末尾再帰が最適化されない。再帰呼出でスタックオーバーフローになる。
  - 精度
    - 除算が含まれる場合（百分率等）は、誤差が出ないようにすべて乗算して算出、比較する
    - 精度が与えられている場合（高々小数第4位等）は、整数化して計算する
