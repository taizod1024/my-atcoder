# ac-ts-task

AtCoder提出用ソースコード個人リポジトリ(TypeScriptのみ)

- どこまで回答しているかは[AtCoder Problems](https://kenkoooo.com/atcoder/#/table/taizod1024)で確認

## 問題解決の方針

- WAがどうしても解消できない場合
  - 除算が含まれる場合（百分率等）
    - 誤差が出ないようにすべて乗算して算出、比較する
  - 精度が与えられている場合（高々小数第4位等）
    - 整数化して計算する
- TLEがどうしても解消できない場合
  - TypeScriptで10^6の配列を作ると制限時間を超える
