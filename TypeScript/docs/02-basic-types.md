# Lesson 02: Basic Types

## このレッスンで学ぶこと

TypeScript が持つ基本的な型（プリミティブ型）を全部把握する。

JavaScript には `typeof` で確認できる値の種類がある。TypeScript ではそれぞれに対応する型名がある。
`string`、`number`、`boolean` がメインの3つ。加えて「値がない」ことを表す `null` と `undefined` がある。
**`null` と `undefined` は別物**というのが最大のポイント。

---

## 何を実装するか

`src/lessons/02-basic-types/BasicTypesLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `string` 型の変数を宣言して表示する
- [ ] `number` 型の変数を宣言して表示する
- [ ] `boolean` 型の変数を宣言して表示する
- [ ] `null` と `undefined` をそれぞれ変数に入れて表示する
- [ ] 各変数の「型: 値」をラベル付きで画面に表示する

### 画面イメージ

```
Lesson 02: Basic Types

string:    "TypeScript"
number:    42
boolean:   true
null:      null
undefined: undefined
```

---

## ヒント

```ts
// 各プリミティブ型の宣言パターン
const message: string = '???'
const count: number = 0
const isReady: boolean = false
const nothing: null = null
const missing: undefined = undefined

// null と undefined の違い
// null    → 「空だとわかっている」（意図的に何も入れていない）
// undefined → 「まだ値がない」（初期化されていない・省略された）
```

---

## main.ts への接続方法

```ts
// コメントを外す
import * as BasicTypesLesson from './lessons/02-basic-types/BasicTypesLesson'

// run: null を変更する
{ label: '02 Basic Types', run: BasicTypesLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- TypeScript の基本型とは何か、1〜3行で書く -->

### 最小実装
```ts
// 5つの基本型を1行ずつ書く
```

### 実務での型
```ts
// よく見るパターンを書く
```

### 落とし穴
<!-- null と undefined を混同したときのエラーなど -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
