# Lesson 10: Transform と Default

## このレッスンで学ぶこと

### .transform() とは

`.transform()` は「検証が成功した後に、値を変換する」機能です。

```ts
const schema = z.string().transform(val => val.toUpperCase())

schema.parse("hello")  // → "HELLO"
```

検証と変換を一度にできるのが Zod の強みです。

### Zod 組み込みの文字列変換

```ts
z.string().trim()         // 前後の空白を除去
z.string().toUpperCase()  // 大文字に変換
z.string().toLowerCase()  // 小文字に変換
```

### .default() とは

`.default()` は「値がない場合（undefined）のデフォルト値を設定する」機能です。

```ts
const schema = z.string().default("ゲスト")

schema.parse("Alice")    // → "Alice"
schema.parse(undefined)  // → "ゲスト"
```

### z.preprocess() とは

`z.preprocess()` は「**検証前**にデータを前処理する」機能です。
フォームの入力値（文字列）を数値に変換したいときによく使います：

```ts
const numberFromString = z.preprocess(
  (val) => Number(val),     // 検証前に文字列→数値に変換
  z.number().positive()     // 変換後の値を検証
)

numberFromString.parse("42")  // → 42（数値）
```

### .transform() と z.preprocess() の違い

- `.transform()` → 検証**後**に変換（型が変わる）
- `z.preprocess()` → 検証**前**に変換（入力の型を整える）

---

## 何を実装するか

`src/lessons/10-transform-default/TransformDefaultLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `.trim()` で空白を除去して結果を確認する
- [ ] `.toUpperCase()` で大文字変換を確認する
- [ ] `z.preprocess()` で文字列を数値に変換する
- [ ] `.default()` で値がないときのデフォルトを設定する
- [ ] `.transform(val => val.split(","))` で文字列を配列に変換する

---

## 画面イメージ

```
┌──────────────────────────────────────────┐
│ Lesson 10: Transform と Default          │
│                                          │
│  名前（前後に空白を入れてみる）          │
│  ["  alice  "   ]                        │
│                                          │
│  タグ（小文字で入力）                    │
│  [javascript     ]                       │
│                                          │
│  数値文字列                              │
│  [42             ]                       │
│                                          │
│  [変換する]                              │
│                                          │
│  trim(): "  alice  " → "alice"           │
│  toUpperCase(): "javascript" → "JAVASCRIPT" │
│  preprocess: "42" → 42                   │
│  default(): （未入力） → "ゲスト"        │
└──────────────────────────────────────────┘
```

---

## ヒント

`.transform()` を使うと `.parse()` の戻り値の型が変わります。
TypeScript のホバーで確認してみましょう。

`z.preprocess()` の第1引数は `(val: unknown) => unknown` の形です。
`val` は `unknown` 型なので、変換前に型をチェックするか `as` を使います。

---

## 学習ノート

### 概念

### 最小実装
```ts
// ここに最小限のコードを書く
```

### 実務での型
（フォーム送信時の前処理、API レスポンスの正規化）

### 落とし穴
（`.transform()` を使うと入力型と出力型が変わるため `z.infer` に注意）

### 説明できる状態
- [ ] `.transform()` が何をするかを説明できる
- [ ] `.default()` の動作を説明できる
- [ ] `z.preprocess()` と `.transform()` の違いを説明できる
