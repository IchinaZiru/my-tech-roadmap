# Lesson 09: Generics

## このレッスンで学ぶこと

**ジェネリクス**を使って「型を引数のように受け取る関数」を作る方法を学ぶ。

`any` を使えば型を問わない関数が書けるが、型情報が失われる。
ジェネリクス `<T>` を使うと「渡した型のまま返ってくる」関数が書ける。
「型安全なまま汎用的なコードを書く」のがジェネリクスの目的。

---

## 何を実装するか

`src/lessons/09-generics/GenericsLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `identity<T>(value: T): T` を実装する（渡した値をそのまま返す）
- [ ] `first<T>(arr: T[]): T | undefined` を実装する（配列の最初の要素を返す）
- [ ] 2つの型パラメータ `<T, U>` を持つ関数を1つ書く（例: ペアを作る）
- [ ] 型制約 `T extends object` を使って、オブジェクトのキー一覧を返す関数を書く

### 画面イメージ

```
Lesson 09: Generics

--- identity ---
identity("hello") = "hello"  （型: string）
identity(42)      = 42       （型: number）

--- first ---
first(["a","b","c"]) = "a"
first([])            = undefined

--- pair ---
pair("名前", 25) = { first: "名前", second: 25 }

--- keys ---
keys({ name: "田中", age: 25 }) = ["name", "age"]
```

---

## ヒント

```ts
// <T> は「型の引数」。呼び出し時に型が確定する
function identity<T>(value: T): T {
  return value
}
identity('hello')  // T = string と推論される
identity(42)       // T = number と推論される

// 配列の要素型を T として受け取る
function first<T>(arr: T[]): T | undefined {
  return arr[0]
}

// 複数の型パラメータ
function pair<T, U>(first: T, second: U): { first: T; second: U } {
  return { first, second }
}

// 型制約: T extends object → オブジェクトしか受け付けない
function keys<T extends object>(obj: T): string[] {
  return Object.keys(obj)
}
```

---

## main.ts への接続方法

```ts
// コメントを外す
import * as GenericsLesson from './lessons/09-generics/GenericsLesson'

// run: null を変更する
{ label: '09 Generics', run: GenericsLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- ジェネリクスとは何か、any との違いを1〜3行で書く -->
ジェネリクスとは「型を引数として受け取る仕組み」
### 最小実装
```ts
function identity<T>(value: T): T
```

### 実務での型
```ts
// Array.map や Promise などジェネリクスが使われている実例を書く
```

### 落とし穴
<!-- T extends の書き忘れ・型パラメータの省略など -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
ジェネリクスは型情報を保ったまま汎用的に書けるのが any との違い