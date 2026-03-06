# Lesson 05: Optional と Nullable

## このレッスンで学ぶこと

### 「値がない」を表す2種類の方法

JavaScript には「値がない」を表す値が2つあります：
- `undefined` → 「設定されていない」
- `null` → 「意図的に空であることを示す」

Zod はこの2つを別々に扱います。

### .optional() とは

`.optional()` をつけると、`undefined`（または省略）を許容します。

```ts
const schema = z.string().optional()
// 型は string | undefined になる

schema.parse("hello")    // OK: "hello"
schema.parse(undefined)  // OK: undefined
schema.parse(null)       // エラー: null は undefined ではない
```

### .nullable() とは

`.nullable()` をつけると、`null` を許容します。

```ts
const schema = z.string().nullable()
// 型は string | null になる

schema.parse("hello")    // OK: "hello"
schema.parse(null)       // OK: null
schema.parse(undefined)  // エラー: undefined は null ではない
```

### .nullish() — 両方許容

`.nullish()` は `null` と `undefined` の両方を許容します。

```ts
const schema = z.string().nullish()
// 型は string | null | undefined になる
```

### .optional() と .nullable() の違い（まとめ）

| メソッド | undefined | null |
|---------|----------|------|
| なし | ❌ | ❌ |
| `.optional()` | ✅ | ❌ |
| `.nullable()` | ❌ | ✅ |
| `.nullish()` | ✅ | ✅ |

---

## 何を実装するか

`src/lessons/05-optional-nullable/OptionalNullableLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `z.object()` の中に `.optional()` フィールドを含める
- [ ] `.nullable()` フィールドも含める
- [ ] フィールドを省略したデータで `.optional()` が通ることを確認する
- [ ] `null` を渡して `.nullable()` が通ることを確認する
- [ ] `null` を `.optional()` フィールドに渡してエラーになることを確認する

---

## 画面イメージ

```
┌────────────────────────────────────────────┐
│ Lesson 05: Optional / Nullable             │
│                                            │
│  [全ケースを検証する]                      │
│                                            │
│  ✅ 全フィールドあり                       │
│  ✅ nickname なし（undefined）             │
│  ✅ bio が null                            │
│  ❌ nickname が null → Expected string,    │
│              received null                 │
└────────────────────────────────────────────┘
```

---

## ヒント

スキーマ定義の中で `.optional()` と `.nullable()` を
どのフィールドにつけるかを考えてから書きましょう。

各テストケースのデータを見て「このデータは通るべきか」を判断してから
スキーマを書くと、意図が明確になります。

---

## 学習ノート

### 概念

### 最小実装
```ts
// ここに最小限のコードを書く
```

### 実務での型
（フォームの任意入力欄、APIの省略可能フィールドなど）

### 落とし穴
（null と undefined を混同しがち）

### 説明できる状態
- [ ] `.optional()` と `.nullable()` の違いを説明できる
- [ ] `.nullish()` が何を許容するか説明できる
- [ ] TypeScript の型が `string | undefined` / `string | null` になることを確認できる
