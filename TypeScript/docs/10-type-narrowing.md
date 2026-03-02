# Lesson 10: Type Narrowing

## このレッスンで学ぶこと

ユニオン型など「複数の可能性がある型」を、条件分岐で**絞り込む**方法を学ぶ。

`string | number` の変数には string と number 両方のメソッドは使えない。
`if (typeof x === 'string')` のように条件を書くと、ブロック内では TypeScript が
「ここは string だ」と判断し、string のメソッドだけが使えるようになる。これが型の絞り込み（Narrowing）。

---

## 何を実装するか

`src/lessons/10-type-narrowing/TypeNarrowingLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `typeof` を使って `string | number` を絞り込む
- [ ] `instanceof` を使って `Date | Error` を絞り込む
- [ ] `in` 演算子でプロパティの有無によって型を絞り込む
- [ ] ユーザー定義型ガード（`value is Type` 構文）を1つ実装する

### 画面イメージ

```
Lesson 10: Type Narrowing

--- typeof ---
formatId("abc") = "ID: ABC"
formatId(42)    = "ID: #42"

--- instanceof ---
describe(new Date())         = "日付: 2024/..."
describe(new Error("oops")) = "エラー: oops"

--- in 演算子 ---
isBird({fly: true})  = true
isBird({swim: true}) = false

--- 型ガード (is 構文) ---
isString("hello") = true
isString(123)     = false
```

---

## ヒント

```ts
// typeof: プリミティブ型の絞り込みに使う
function formatId(id: string | number): string {
  if (typeof id === 'string') {
    return `ID: ${id.toUpperCase()}`  // ここは string
  }
  return `ID: #${id}`  // ここは number
}

// instanceof: クラスのインスタンスかどうかで絞り込む
function describe(value: Date | Error): string {
  if (value instanceof Date) {
    return `日付: ${value.toLocaleDateString()}`
  }
  return `エラー: ${value.message}`
}

// in 演算子: プロパティが存在するかで絞り込む
type Bird = { fly: () => void }
type Fish = { swim: () => void }
function isBird(animal: Bird | Fish): animal is Bird {
  return 'fly' in animal
}

// ユーザー定義型ガード: 戻り値を "引数名 is 型" と書く
function isString(value: unknown): value is string {
  return typeof value === 'string'
}
```

---

## main.ts への接続方法

```ts
// コメントを外す
import * as TypeNarrowingLesson from './lessons/10-type-narrowing/TypeNarrowingLesson'

// run: null を変更する
{ label: '10 Type Narrowing', run: TypeNarrowingLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- 型の絞り込みとは何か、1〜3行で書く -->

### 最小実装
```ts
// typeof を使った最小の絞り込みコードを書く
```

### 実務での型
```ts
// API レスポンスの型チェックなど、実務でよく見るパターンを書く
```

### 落とし穴
<!-- typeof null === "object" の罠など -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
