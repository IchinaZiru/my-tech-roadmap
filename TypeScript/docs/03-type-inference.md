# Lesson 03: Type Inference

## このレッスンで学ぶこと

TypeScript は型を**自動で推測**できる。毎回 `: string` と書かなくていい。

`const name = 'Alice'` と書くだけで、TypeScript は「name は string 型だ」と判断する。
ただし `let` と `const` では推論の結果が違う。`const` は「この値しか入らない」と判断するため、
より厳密な型（リテラル型）が付く。この違いを理解することが型推論のコツ。

---

## 何を実装するか

`src/lessons/03-type-inference/TypeInferenceLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] 型アノテーションなしで `const` 変数を宣言し、推論された型をコメントで示す
- [ ] 同じ値を `let` で宣言して `const` との推論の違いをコメントで示す
- [ ] 戻り値の型を書かない関数を作り、推論されることをコメントで示す
- [ ] `[]` で空配列を宣言したとき `any[]` になることを示す（推論失敗の例）

### 画面イメージ

```
Lesson 03: Type Inference

const greeting = "hello"  → 型: "hello"（リテラル型）
let greeting = "hello"    → 型: string（ワイド型）

関数の戻り値も自動推論される
add(1, 2) → 型: number

注意: [] は any[] になる（型情報が失われる）
```

---

## ヒント

```ts
// TypeScript がどんな型を付けるかは IDE のホバーで確認できる
// VSCode では変数の上にカーソルを乗せると型が表示される

const x = 'hello'  // TypeScript は "hello" 型（リテラル型）と推論する
let y = 'hello'    // TypeScript は string 型と推論する

// 関数の戻り値も書かなければ推論される
function double(n: number) {
  return n * 2  // → 戻り値は number と推論される
}
```

---

## main.ts への接続方法

```ts
// コメントを外す
import * as TypeInferenceLesson from './lessons/03-type-inference/TypeInferenceLesson'

// run: null を変更する
{ label: '03 Type Inference', run: TypeInferenceLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- 型推論とは何か、1〜3行で書く -->

### 最小実装
```ts
// let と const の推論の違いを示す最小コードを書く
```

### 実務での型
```ts
// 実務で型推論に頼る場面を書く
```

### 落とし穴
<!-- any になってしまうケースと対策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
