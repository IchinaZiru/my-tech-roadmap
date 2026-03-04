# Lesson 05: Objects & Types

## このレッスンで学ぶこと

オブジェクトの「形」を型として定義する方法と、`type` エイリアスを学ぶ。

`{ name: '田中', age: 25 }` というオブジェクトに対して、TypeScript では
「`name` は string で `age` は number でなければならない」という形を定義できる。
この形の定義を**型エイリアス**（`type` キーワード）という。同じ形のオブジェクトを複数作るときに便利。

---

## 何を実装するか

`src/lessons/05-objects-types/ObjectsTypesLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] インラインでオブジェクトに型を付ける（変数宣言の右側に直接 `{ name: string; age: number }` を書く）
- [ ] `type User = { ... }` で User 型を定義する
- [ ] User 型の変数を2つ作って各プロパティを表示する
- [ ] `nickname?: string` のようにオプショナルプロパティを持つ型を1つ作る

### 画面イメージ

```
Lesson 05: Objects & Types

--- インライン型 ---
座標: x=10, y=20

--- type エイリアス ---
ユーザー1: 田中（25歳）
ユーザー2: 鈴木（30歳）

--- オプショナルプロパティ ---
ニックネームあり: taro
ニックネームなし: (なし)
```

---

## ヒント

```ts
// インライン型（その変数だけに使う型）
const point: { x: number; y: number } = { x: 10, y: 20 }

// type エイリアス（名前を付けて再利用できる）
type User = {
  name: string
  age: number
  nickname?: string  // ? を付けるとオプショナル（あってもなくてもいい）
}

// オプショナルプロパティにアクセスするときは undefined の可能性を考える
// user.nickname ?? '(なし)'  ← ?? は "null/undefined なら右の値を使う" という演算子
```

---

## main.ts への接続方法

```ts
// コメントを外す
import * as ObjectsTypesLesson from './lessons/05-objects-types/ObjectsTypesLesson'

// run: null を変更する
{ label: '05 Objects Types', run: ObjectsTypesLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- type エイリアスとは何か、1〜3行で書く -->
オブジェクトの「形」を型として定義する
### 最小実装
```ts
  type User = {
    name : string
    age : number
    nickname? : string
  }
```

### 実務での型
```ts
  type User = {
    name : string
    age : number
    nickname? : string
  }

  const user1 : User ={
    name : "田中",
    age : 25,
    nickname : "taro"
  }
```

### 落とし穴
<!-- プロパティ名のタイポ・オプショナルの扱い忘れなど -->
`??` は "null/undefined なら右の値を使う" という演算子
`<h2>ユーザー2: ${user2.name},${user2.age},${user2.nickname ?? '(なし)'}</h2>`
### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
