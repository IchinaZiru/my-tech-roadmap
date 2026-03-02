# Lesson 01: Hello World

## このレッスンで学ぶこと

TypeScript の最初の一歩：変数に「型」を付ける。

JavaScript では変数に何でも入れられる。`let x = 'hello'` と書いた後に `x = 123` としても怒られない。
TypeScript では `: string` のように型を宣言することで、**間違った値を代入しようとするとエラーになる**。
このエラーが「実行前」に出るのが TypeScript の最大の価値。まずその感覚を掴む。

---

## 何を実装するか

`src/lessons/01-hello-world/HelloWorldLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `const name: string = '自分の名前'` と型アノテーションを明示する
- [ ] `const age: number = 数字` と型アノテーションを明示する
- [ ] 変数を使って HTML 文字列を組み立てて返す
- [ ] 返す HTML に `<h2>Lesson 01: Hello World</h2>` を含める

### 画面イメージ

```
Lesson 01: Hello World

名前: 田中
年齢: 25
メッセージ: こんにちは、田中さん！
```

---

## ヒント

```ts
// 型アノテーションは変数名の後ろに ": 型名" と書く
const name: string = '???'
const age: number = 0

// テンプレートリテラルで HTML を組み立てる
// `<p>${変数}</p>` という形で文字列の中に変数を埋め込める
export function run(): string {
  // ...
  return `
    <h2>...</h2>
    <p>名前: ${name}</p>
  `
}
```

---

## main.ts への接続方法

実装後、`src/main.ts` を以下のように変更する：

```ts
// コメントを外す
import * as HelloWorldLesson from './lessons/01-hello-world/HelloWorldLesson'

// run: null を変更する
{ label: '01 Hello World', run: HelloWorldLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- TypeScript の型アノテーションとは何か、1〜3行で書く -->

### 最小実装
```ts
// 最もシンプルな型アノテーションのコードを書く
```

### 実務での型
```ts
// よく使うパターンを書く
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
