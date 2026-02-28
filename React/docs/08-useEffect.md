# Lesson 08: useEffect

## このレッスンで学ぶこと

コンポーネントの「外側」（API・タイマー・DOM操作）と同期するための仕組み。
第2引数の配列で「いつ実行するか」を制御する。
コンポーネントが消えるときに後片付けする「クリーンアップ」も重要。

---

## 何を実装するか

`src/lessons/08-useEffect/UseEffectLesson.jsx` に以下の2つを作る。

### 実装チェックリスト

**① タイマー**
- [ ] コンポーネントが表示されると毎秒カウントアップするタイマーを作る
- [ ] クリーンアップで `clearInterval` を呼んでタイマーを止める
  - 確認方法：別のレッスンに移るとカウントが止まる

**② APIフェッチ（GitHub API）**
- [ ] コンポーネント表示時に `https://api.github.com/users/facebook` を fetch する
- [ ] ローディング中は「読み込み中...」を表示する
- [ ] 取得後にユーザー名とフォロワー数を表示する
- [ ] input でユーザー名を変えると再取得される（依存配列に username を入れる）

### 画面イメージ

```
Lesson 08: useEffect

[タイマー]
経過時間: 12秒

──────────
[APIフェッチ]
ユーザー名: [facebook____]
Facebook  フォロワー: 123456
```

---

## ヒント

```jsx
import { useState, useEffect } from 'react'

// マウント時に1回だけ実行（空の依存配列）
useEffect(() => {
  // 何か処理
}, [])

// username が変わるたびに実行
useEffect(() => {
  // fetch など
}, [username])

// クリーンアップ（return で後片付け関数を返す）
useEffect(() => {
  const id = setInterval(() => { ... }, 1000)
  return () => clearInterval(id)  // ← コンポーネントが消えるときに実行
}, [])
```

---

## App.jsx への接続方法

```jsx
import UseEffectLesson from './lessons/08-useEffect/UseEffectLesson'
{ label: '08 useEffect', Component: UseEffectLesson },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念

### 最小実装
```jsx
```

### 実務での型
```jsx
```

### 落とし穴

### 説明できる状態
