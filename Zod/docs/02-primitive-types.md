# Lesson 02: プリミティブ型

## このレッスンで学ぶこと

### プリミティブ型（primitive type）とは

プリミティブ型とは「それ以上分解できない基本的な値の型」のことです。
JavaScript/TypeScript では以下が代表的なプリミティブ型です：

| 型 | 例 |
|---|---|
| string | `"hello"`, `"123"` |
| number | `42`, `3.14`, `-10` |
| boolean | `true`, `false` |
| null | `null` |
| undefined | `undefined` |

### Zod でのプリミティブ型

Zod にはそれぞれに対応するスキーマがあります：

```ts
z.string()     // 文字列
z.number()     // 数値
z.boolean()    // 真偽値
z.null()       // null のみ
z.undefined()  // undefined のみ
z.any()        // 何でも通る（型チェックなし）
z.unknown()    // 何でも通るが、使う前に絞り込みが必要
```

### 型の違いを Zod で体感する

`"42"` と `42` は見た目が似ていますが、文字列と数値は別の型です。
`z.number().parse("42")` はエラーになります。

---

## 何を実装するか

`src/lessons/02-primitive-types/PrimitiveTypesLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `z.string()` で `"hello"` を検証して成功させる
- [ ] `z.number()` で `42` を検証して成功させる
- [ ] `z.boolean()` で `true` を検証して成功させる
- [ ] `z.string()` に `123`（数値）を渡してエラーを確認する
- [ ] `z.null()` で `null` を検証して成功させる

---

## 画面イメージ

```
┌─────────────────────────────────────────┐
│ Lesson 02: プリミティブ型               │
│                                         │
│  [全スキーマを検証する]                 │
│                                         │
│  ✅ string: "hello" → 成功              │
│  ✅ number: 42 → 成功                   │
│  ✅ boolean: true → 成功                │
│  ❌ string: 123 → Expected string,      │
│              received number            │
└─────────────────────────────────────────┘
```

---

## ヒント

### エラーをキャッチする方法

`.parse()` はエラーが発生すると例外（ZodError）を投げます。
`try/catch` で受け取れます：

```ts
try {
  const result = schema.parse(値)
  // 成功
} catch (e) {
  // e は ZodError
}
```

### 配列への結果の追加

```ts
newResults.push({
  type: 'string',
  value: "hello",
  success: true,
  message: '成功',
})
```

---

## 学習ノート

### 概念
（プリミティブ型とは、自分の言葉で）

### 最小実装
```ts
// ここに最小限のコードを書く
```

### 実務での型
（string と number の混同でよく起きるバグについて）

### 落とし穴
（ハマったこと）

### 説明できる状態
- [ ] 各プリミティブ型のスキーマを書ける
- [ ] 型が違うとエラーになることを説明できる
- [ ] `"42"` と `42` の違いを説明できる
