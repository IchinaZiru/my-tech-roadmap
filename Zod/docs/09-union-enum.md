# Lesson 09: Union と Enum

## このレッスンで学ぶこと

### z.union() とは

`z.union()` は「複数の型のどれかであればOK」というスキーマです。
TypeScript の `A | B` 型に相当します。

```ts
const idSchema = z.union([z.string(), z.number()])
// string か number なら OK

idSchema.parse("abc-123")  // OK
idSchema.parse(42)         // OK
idSchema.parse(true)       // エラー: boolean は string でも number でもない
```

### z.literal() とは

`z.literal()` は「特定の値だけ」を受け付けるスキーマです。

```ts
z.literal("admin")   // "admin" という文字列だけ
z.literal(42)        // 42 という数値だけ
z.literal(true)      // true だけ
```

### z.enum() とは

`z.enum()` は「決まった文字列の中のどれか」を受け付けるスキーマです。
TypeScript の `"a" | "b" | "c"` 型に相当します。

```ts
const colorSchema = z.enum(["red", "green", "blue"])

colorSchema.parse("red")    // OK
colorSchema.parse("yellow") // エラー: yellow は定義にない
```

### z.enum() vs z.union(z.literal(...))

どちらも似た目的ですが：
- `z.enum()` → 文字列の列挙（シンプル）
- `z.union([z.literal(...),...])` → 任意の値の列挙（型が混在できる）

```ts
// enum: 文字列のみ
z.enum(["red", "green", "blue"])

// union + literal: 文字列と数値の混在も可
z.union([z.literal("large"), z.literal("medium"), z.literal(0)])
```

---

## 何を実装するか

`src/lessons/09-union-enum/UnionEnumLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `z.enum(["red", "green", "blue"])` で色スキーマを作る
- [ ] `z.union([z.literal("active"), ...])` でステータススキーマを作る
- [ ] `z.union([z.string(), z.number()])` でIDスキーマを作る
- [ ] 定義外の値を渡してエラーを確認する
- [ ] IDスキーマに文字列と数値の両方を渡して両方通ることを確認する

---

## 画面イメージ

```
┌──────────────────────────────────────┐
│ Lesson 09: Union と Enum             │
│                                      │
│  色（enum）                          │
│  [red ▼]                             │
│                                      │
│  ステータス（union of literals）     │
│  [active ▼]                          │
│                                      │
│  ID（文字列または数値）              │
│  [123             ]                  │
│                                      │
│  [検証する]                          │
│                                      │
│  ✅ color: "red"                     │
│  ✅ status: "active"                 │
│  ✅ id (文字列として): "123"         │
│  ✅ id (数値として): 123             │
└──────────────────────────────────────┘
```

---

## ヒント

`z.enum()` で定義した値は `.options` プロパティで取り出せます：
```ts
colorSchema.options  // → ["red", "green", "blue"]
```

---

## 学習ノート

### 概念

### 最小実装
```ts
// ここに最小限のコードを書く
```

### 実務での型
（ステータス管理、役割（role）、カテゴリなどで頻繁に使う）

### 落とし穴
（`z.enum()` は文字列のみ。数値の列挙には `z.nativeEnum()` か `z.union()` を使う）

### 説明できる状態
- [ ] `z.union()` と `z.enum()` の違いを説明できる
- [ ] `z.literal()` の用途を説明できる
- [ ] enum に含まれない値がエラーになることを説明できる
