# Lesson 11: useContext

## このレッスンで学ぶこと

Props のバケツリレー（prop drilling）を回避する仕組み。
ツリーの深い場所にあるコンポーネントでも、直接 Props を渡さずに値を取り出せる。
`createContext` → `Provider` で囲む → `useContext` で取り出す、の3ステップ。

---

## 何を実装するか

`src/lessons/11-useContext/UseContextLesson.jsx` にテーマ切替を作る。

### 実装チェックリスト

- [ ] `createContext` で Context を作る
- [ ] `Provider` でコンポーネントツリーを囲む
- [ ] 深い子コンポーネントで `useContext` を使って値を取り出す
- [ ] **中間コンポーネントには Props を渡さない**（これが useContext の価値）
- [ ] ボタンでテーマ（ライト/ダーク）を切り替えて、深い子の見た目が変わることを確認する

### 画面イメージ

```
Lesson 11: useContext

[テーマ切替]

ContentArea（中間層: theme propsを持っていない）
  └─ ThemedButton [テーマ: dark]  ← テーマが反映されている
```

### コンポーネント構造（Propsを渡さないことを意識する）

```
UseContextLesson
  ├── ThemeContext.Provider value={theme}
  │     └── ContentArea         ← theme props なし
  │           └── ThemedButton  ← theme props なし、でもuseContextで取れる
  └── [テーマ切替ボタン]
```

---

## ヒント

```jsx
import { useState, useContext, createContext } from 'react'

// 1. Contextを作る（初期値を渡す）
const ThemeContext = createContext('light')

// 2. 深い子で取り出す（Propsは受け取っていない）
function ThemedButton() {
  const theme = useContext(ThemeContext)
  return <button style={{ background: theme === 'dark' ? '#1f2937' : '#f3f4f6' }}>
    テーマ: {theme}
  </button>
}

// 3. Providerで囲んで値を注入する
<ThemeContext.Provider value={theme}>
  <ContentArea />
</ThemeContext.Provider>
```

### 落とし穴：Providerの外では取り出せない

```jsx
// NG: Provider の外にあるコンポーネントは初期値しか取れない
function Outside() {
  const theme = useContext(ThemeContext) // 'light'（初期値）のまま
}
```

---

## App.jsx への接続方法

```jsx
import UseContextLesson from './lessons/11-useContext/UseContextLesson'
{ label: '11 useContext', Component: UseContextLesson },
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
