# Lesson 07: 数値バリデーション

## このレッスンで学ぶこと

### 数値バリデーションの種類

```ts
z.number().min(0)          // 0以上
z.number().max(100)        // 100以下
z.number().int()           // 整数のみ（小数NG）
z.number().positive()      // 正の数（0より大きい）
z.number().negative()      // 負の数（0より小さい）
z.number().nonnegative()   // 0以上（0を含む）
z.number().nonpositive()   // 0以下（0を含む）
z.number().multipleOf(5)   // 5の倍数
z.number().finite()        // 有限数（Infinity NG）
z.number().safe()          // Number.MIN_SAFE_INTEGER ～ MAX_SAFE_INTEGER の範囲
```

### .int() の注意点

`z.number().int()` は小数点を含む数値を弾きます：

```ts
const schema = z.number().int()
schema.parse(42)      // OK
schema.parse(42.5)    // エラー: Expected integer, received float
schema.parse(-1)      // OK
```

### .positive() と .nonnegative() の違い

```ts
z.number().positive()    // > 0 （0は含まない）
z.number().nonnegative() // >= 0 （0も含む）
```

---

## 何を実装するか

`src/lessons/07-number-validations/NumberValidationsLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `.int().min(0).max(150)` で年齢スキーマを作る
- [ ] `.positive()` で価格スキーマを作る
- [ ] `.min(0).max(100)` でスコアスキーマを作る
- [ ] 小数点を入力して `.int()` が弾くことを確認する
- [ ] 0 を `.positive()` に渡してエラーになることを確認する

---

## 画面イメージ

```
┌──────────────────────────────────────┐
│ Lesson 07: 数値バリデーション        │
│                                      │
│  年齢（整数 0〜150）                 │
│  [25              ]                  │
│  ✅ 検証成功                         │
│                                      │
│  価格（正の数、0.01単位）            │
│  [-100            ]                  │
│  ❌ Number must be greater than 0    │
│                                      │
│  スコア（0〜100）                    │
│  [150             ]                  │
│  ❌ Number must be less than or      │
│     equal to 100                     │
│                                      │
│  [検証する]                          │
└──────────────────────────────────────┘
```

---

## ヒント

入力フォームの値は文字列（string）として渡ってきます。
`Number(入力値)` で数値に変換してからスキーマで検証しましょう。

`NaN`（Not a Number）になる場合もあるので注意。
`isNaN(Number(value))` で事前にチェックできます。

---

## 学習ノート

### 概念

### 最小実装
```ts
// ここに最小限のコードを書く
```

### 実務での型
（価格・年齢・数量などの数値フィールドで使うパターン）

### 落とし穴
（フォームの値が文字列なので変換が必要）

### 説明できる状態
- [ ] `.int()` と `.positive()` の違いを説明できる
- [ ] 文字列を数値に変換してから検証する理由を説明できる
- [ ] `.nonnegative()` と `.positive()` の違いを説明できる
