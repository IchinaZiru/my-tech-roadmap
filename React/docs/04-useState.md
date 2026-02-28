# Lesson 04: useState

## このレッスンで学ぶこと

コンポーネントが「記憶」を持つ仕組み。
`useState` で作った変数が変わると、Reactが自動で画面を再描画する。
React で最も基本的かつ重要な Hook。

---

## 何を実装するか

`src/lessons/04-useState/UseStateLesson.jsx` に以下を全て含むコードを書く。

### 実装チェックリスト

**カウンター**
- [ ] `useState(0)` で初期値0のカウンターを作る
- [ ] ボタンを押すと数字が増える
- [ ] ボタンを押すと数字が減る
- [ ] リセットボタンで0に戻る

**トグル（おまけ）**
- [ ] `useState(true)` でテキストの表示/非表示を切り替える

### 画面イメージ

```
Lesson 04: useState

        42          ← 大きく表示

[- 減らす]  [リセット]  [+ 増やす]

──────────
[表示する / 隠す]
このテキストが切り替わる
```

---

## ヒント

```jsx
import { useState } from 'react'

const [count, setCount] = useState(0)
//     ↑現在値   ↑更新関数   ↑初期値

// 更新するときは setCount を呼ぶ
setCount(count + 1)
```

---

## App.jsx への接続方法

```jsx
import UseStateLesson from './lessons/04-useState/UseStateLesson'
{ label: '04 useState', Component: UseStateLesson },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- useState とは何か、1〜3行で -->
関数コンポーネントに更新関数を用意してその値を更新すると画面が自動で変わる仕組み
### 最小実装
```jsx
const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

<button onClick={handleClick}>
button
</button>
```

### 実務での型
```jsx
  function handleIncrement() {
    setCount(count => count + 1)
  }
```

### 落とし穴
<!-- よくあるエラーと回避策 -->
Reactは次のstateを保存した後に新しい値でコンポーネントを再レンダーしUIを更新する
更新用関数をわたさないと、複数関数を呼び出されても更新は一回しか変更されない
### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
useState は「コンポーネントが記憶を持つ仕組み」。const [値, 更新関数] = useState(初期値) と書き、更新関数を呼ぶと画面が再描画される。