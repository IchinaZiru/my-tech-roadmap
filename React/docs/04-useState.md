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

### 最小実装
```jsx
// 最もシンプルなuseState使用例を書く
```

### 実務での型
```jsx
// よく使うパターンを書く
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
