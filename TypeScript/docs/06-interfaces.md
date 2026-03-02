# Lesson 06: Interfaces

## このレッスンで学ぶこと

`interface` で型を定義する方法と、`extends` による拡張を学ぶ。

`type` と `interface` はどちらもオブジェクトの形を定義できる。最大の違いは
**`interface` は `extends` で拡張できる**点。「Animal の全プロパティ + breed だけ追加した Dog」
のように、既存の型を継承しながら新しい型を作るときに使う。

---

## 何を実装するか

`src/lessons/06-interfaces/InterfacesLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `interface Animal` を定義する（`name: string`、`sound: string`）
- [ ] `interface Dog extends Animal` を定義する（`breed: string` を追加）
- [ ] Animal 型と Dog 型の変数をそれぞれ作って表示する
- [ ] `interface` と `type` の違いをコメントで1行説明する

### 画面イメージ

```
Lesson 06: Interfaces

--- Animal ---
名前: ネコ
鳴き声: にゃー

--- Dog extends Animal ---
名前: ポチ
鳴き声: わん
犬種: 柴犬
```

---

## ヒント

```ts
// interface の定義
interface Animal {
  name: string
  sound: string
}

// extends で Animal の全プロパティを引き継ぎつつ breed を追加
interface Dog extends Animal {
  breed: string
}

// Dog 型の変数には Animal の全プロパティ + breed が必要
const dog: Dog = { name: 'ポチ', sound: 'わん', breed: '柴犬' }

// interface vs type
// interface → extends で拡張可能。同名で再定義すると合体（マージ）する
// type      → extends は使えないが、交差型（&）で似たことができる
```

---

## main.ts への接続方法

```ts
// コメントを外す
import * as InterfacesLesson from './lessons/06-interfaces/InterfacesLesson'

// run: null を変更する
{ label: '06 Interfaces', run: InterfacesLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- interface とは何か、type との違いを1〜3行で書く -->

### 最小実装
```ts
// Animal と Dog の最小定義を書く
```

### 実務での型
```ts
// 実務で interface を使う代表的なパターンを書く
```

### 落とし穴
<!-- extends し忘れ・プロパティの不足など -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
