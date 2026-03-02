# Lesson 04: Arrays & Tuples

## このレッスンで学ぶこと

配列に「何の型の値が入るか」を指定する方法と、**タプル型**を学ぶ。

通常の配列は何個でも同じ型の値を入れられる（`string[]`）。
タプル型は「1番目は string、2番目は number」と**順番と型を固定**した配列のこと。
要素数が決まっていて意味が決まっているデータ（例: `[名前, 年齢]`）に使う。

---

## 何を実装するか

`src/lessons/04-arrays-tuples/ArraysTuplesLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `string[]` 型の配列を宣言してすべての要素を表示する
- [ ] `number[]` 型の配列で `map` と `filter` を使って変換・絞り込みをする
- [ ] タプル型 `[string, number]` を宣言して各要素にインデックスでアクセスする
- [ ] 配列とタプルの違いをコメントで説明する

### 画面イメージ

```
Lesson 04: Arrays & Tuples

--- 配列 ---
fruits: りんご, みかん, ぶどう
scores: 80, 90, 70
2倍: 160, 180, 140
70以上: 80, 90, 70

--- タプル ---
person: ["田中", 25]
名前: 田中
年齢: 25
```

---

## ヒント

```ts
// 配列の型は "型名[]" と書く
const fruits: string[] = ['りんご', 'みかん']

// map は各要素を変換した新しい配列を返す
// filter は条件を満たす要素だけの新しい配列を返す

// タプルは "[型1, 型2]" という形で宣言する
const person: [string, number] = ['田中', 25]
// person[0] → string、person[1] → number として扱われる
```

---

## main.ts への接続方法

```ts
// コメントを外す
import * as ArraysTuplesLesson from './lessons/04-arrays-tuples/ArraysTuplesLesson'

// run: null を変更する
{ label: '04 Arrays Tuples', run: ArraysTuplesLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- 配列型とタプル型の違いを1〜3行で書く -->

### 最小実装
```ts
// string[] と [string, number] の最小宣言を書く
```

### 実務での型
```ts
// 実務でよく使う配列・タプルのパターンを書く
```

### 落とし穴
<!-- インデックス超過・型ミスマッチなどのエラーと対策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
