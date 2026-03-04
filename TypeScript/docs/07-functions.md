# Lesson 07: Functions

## このレッスンで学ぶこと

関数の引数・戻り値・オプション引数に型を付ける方法を学ぶ。

TypeScript では関数の「入口」と「出口」に型を定義できる。
間違った型の引数を渡したり、戻り値を間違って使ったりすると実行前にエラーになる。
加えて、`?` で省略可能な引数、`=` でデフォルト値を持つ引数も覚える。

---

## 何を実装するか

`src/lessons/07-functions/FunctionsLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] 引数と戻り値に型を付けた関数を書く（例: `add(a: number, b: number): number`）
- [ ] オプション引数（`greeting?: string`）を持つ関数を書く
- [ ] デフォルト引数（`greeting = 'こんにちは'`）を持つ関数を書く
- [ ] 関数型を変数に代入する（`const fn: (x: number) => string = ...`）

### 画面イメージ

```
Lesson 07: Functions

add(3, 4) = 7

greet("田中") = "こんにちは、田中さん！"
greet("田中", "やあ") = "やあ、田中さん！"

double(5) = "10"

関数型: (x: number) => string
```

---

## ヒント

```ts
// 基本パターン: 引数と戻り値に型を付ける
function add(a: number, b: number): number {
  return a + b
}

// オプション引数: ? を付けると省略可能になる
// 省略時は undefined が入るので、中でチェックが必要
function greet(name: string, greeting?: string): string {
  const g = greeting ?? 'こんにちは'
  return `${g}、${name}さん！`
}

// デフォルト引数: = で省略時の値を指定する（? より便利なことが多い）
function greet2(name: string, greeting = 'こんにちは'): string {
  return `${greeting}、${name}さん！`
}

// 関数型を変数に代入する書き方
// "(引数名: 型) => 戻り値の型" という形で型を書く
const double: (x: number) => string = (x) => String(x * 2)
```

---

## main.ts への接続方法

```ts
// コメントを外す
import * as FunctionsLesson from './lessons/07-functions/FunctionsLesson'

// run: null を変更する
{ label: '07 Functions', run: FunctionsLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- 関数の型付けとは何か、1〜3行で書く -->
関数の入力する引数や関数の出力する型を指定することができる
### 最小実装
```ts
function add(a: number, b: number): number
```

### 実務での型
```ts
  function add(a: number, b: number): number {
    return a + b
  }
```

### 落とし穴
<!-- オプション引数の undefined チェック忘れなど -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
