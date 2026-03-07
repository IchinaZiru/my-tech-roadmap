# Lesson 03: オブジェクトスキーマ

## このレッスンで学ぶこと

### z.object() とは

`z.object()` は「オブジェクトのスキーマ」を定義します。
オブジェクトとは `{ key: value }` の形のデータです。

```ts
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
})
```

このスキーマは「`name` が文字列で、`age` が数値であるオブジェクト」を表します。

### 検証の仕組み

`z.object()` は以下をチェックします：
- 全ての必須フィールドが存在するか
- 各フィールドの型が正しいか

```ts
userSchema.parse({ name: "Alice", age: 25 })  // OK
userSchema.parse({ name: "Alice" })            // エラー: age が必要
userSchema.parse({ name: 123, age: 25 })       // エラー: name は文字列のはず
```

### 余分なフィールドはどうなる？

デフォルトでは、定義にないフィールドは**無視されて除去**されます：

```ts
userSchema.parse({ name: "Alice", age: 25, extra: "ignored" })
// → { name: "Alice", age: 25 }  ← extra は消える
```

---

## 何を実装するか

`src/lessons/03-object-schema/ObjectSchemaLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `z.object({ name: z.string(), age: z.number() })` でスキーマを定義する
- [ ] テキストエリアに JSON を入力して検証できるようにする
- [ ] 正しいデータで成功を確認する
- [ ] 必須フィールドが欠けているときのエラーを確認する
- [ ] 型が間違っているときのエラーを確認する

---

## 画面イメージ

```
┌────────────────────────────────────┐
│ Lesson 03: オブジェクトスキーマ    │
│                                    │
│  JSON を入力して検証する:          │
│  ┌──────────────────────────────┐  │
│  │ {                            │  │
│  │   "name": "Alice",           │  │
│  │   "age": 25                  │  │
│  │ }                            │  │
│  └──────────────────────────────┘  │
│                                    │
│  [検証する]                        │
│                                    │
│  ✅ {                              │
│       "name": "Alice",             │
│       "age": 25                    │
│     }                              │
└────────────────────────────────────┘
```

---

## テストケース（試してみよう）

```json
// 正常
{ "name": "Alice", "age": 25 }

// エラー: age がない
{ "name": "Alice" }

// エラー: age が文字列
{ "name": "Alice", "age": "25" }

// 余分なフィールドは無視される
{ "name": "Alice", "age": 25, "extra": "ignored" }
```

---

## ヒント

### JSON.parse との組み合わせ

テキストエリアの入力は文字列なので、まず `JSON.parse()` でオブジェクトに変換し、
それを Zod スキーマで検証します。

```ts
const parsed = JSON.parse(inputString)   // 文字列 → オブジェクト
const validated = schema.parse(parsed)   // オブジェクト → 検証済みデータ
```

---

## 学習ノート

### 概念
（z.object() の役割を自分の言葉で）

### 最小実装
```ts
// ここに最小限のコードを書く
```

### 実務での型
（APIレスポンスの検証でよく使うパターン）

### 落とし穴
（余分なフィールドの扱いなど）

### 説明できる状態
- [ ] `z.object()` の書き方を説明できる
- [ ] 必須フィールドが欠けたときのエラーを説明できる
- [ ] 余分なフィールドがどう扱われるかを説明できる
