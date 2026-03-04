# Lesson 08: Union & Literal Types

## このレッスンで学ぶこと

「AかBかCのどれか」を表す**ユニオン型**と、**リテラル型**を学ぶ。

`string | number` は「文字列か数値のどちらか」という意味。
`'admin' | 'user' | 'guest'` は「この3つの文字列のどれか」というリテラル型。
この2つを組み合わせると、取りうる値を限定できるため、実務で頻繁に使われる。

---

## 何を実装するか

`src/lessons/08-union-literal/UnionLiteralLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `string | number` のユニオン型変数を作り、両方の値を代入して表示する
- [ ] `type Role = 'admin' | 'user' | 'guest'` でリテラルユニオン型を定義する
- [ ] `Role` を引数に取り、役割に応じてメッセージを返す関数を書く
- [ ] 判別可能なユニオン（`type` と `kind` プロパティで分岐）を1つ作る

### 画面イメージ

```
Lesson 08: Union & Literal Types

--- ユニオン型 ---
id = "abc123" （string）
id = 42 （number）

--- リテラル型 ---
admin の権限: フルアクセス
user の権限: 閲覧・編集
guest の権限: 閲覧のみ

--- 判別可能なユニオン ---
Circle: 面積 = 78.5
Rectangle: 面積 = 24
```

---

## ヒント

```ts
// ユニオン型: | で複数の型を並べる
let id: string | number = 'abc123'
id = 42  // どちらも OK

// リテラル型: 値そのものを型として使う
type Role = 'admin' | 'user' | 'guest'

// switch で分岐するとき、TypeScript は各 case の型を絞り込んでくれる
function getPermission(role: Role): string {
  switch (role) {
    case 'admin': return '...'
    case 'user':  return '...'
    case 'guest': return '...'
  }
}

// 判別可能なユニオン: kind プロパティで型を区別する
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
```

---

## main.ts への接続方法

```ts
// コメントを外す
import * as UnionLiteralLesson from './lessons/08-union-literal/UnionLiteralLesson'

// run: null を変更する
{ label: '08 Union Literal', run: UnionLiteralLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- ユニオン型・リテラル型とは何か、1〜3行で書く -->
ユニオン型 A | B は「AかBのどちらか」。
リテラル型は値そのものを型にしたもの（'admin' | 'user'）。

### 最小実装
```ts
type Role = 'admin' | 'user' | 'guest'
  
function getPermissions(role: Role): string {
    switch(role){
      case 'admin': return "フルアクセス"
      case 'user': return "閲覧・編集"
      case 'guest': return "閲覧のみ"
    }
  }
```

### 実務での型
```ts
// API のステータスや画面の状態管理でよく使う
type Status = 'loading' | 'success' | 'error'

```

### 落とし穴
<!-- switch の網羅性チェック・ユニオン型での操作制限など -->
switch で全ケースを書かないと戻り値が undefined になる
（TypeScript が「全パターン網羅されていない」と警告してくれる）

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
「ユニオン型は複数の型のどれかを表す。
リテラル型は特定の値だけを許可する型で、
組み合わせると取りうる値を限定できる」と言えれば OK。
