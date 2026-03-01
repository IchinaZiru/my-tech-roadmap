# Lesson 01: Hello Router

## このレッスンで学ぶこと

React Router の3つの基本要素。

- **Router**（`MemoryRouter`）— ルーティング機能全体を包む器
- **Routes** — Route の一覧を管理する。一致したものだけを描画する
- **Route** — `path` とコンポーネントを対応させる1行

この3つの関係は「入れ子」になっている：

```
MemoryRouter
  └── Routes
        ├── Route path="/"       → Home コンポーネント
        └── Route path="/about"  → About コンポーネント
```

> **実際のアプリでは** `<MemoryRouter>` の代わりに `<BrowserRouter>` を使う。
> ブラウザの URL バーと同期するのが BrowserRouter、メモリ内だけで管理するのが MemoryRouter。
> このコースでは各レッスンを独立させるため MemoryRouter を使う。

---

## 何を実装するか

`src/lessons/01-hello-router/HelloRouterLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `<MemoryRouter>` で全体を囲む
- [ ] `<Routes>` を `<MemoryRouter>` の中に置く
- [ ] `path="/"` に `<Home />` コンポーネントを対応させる
- [ ] `path="/about"` に `<About />` コンポーネントを対応させる
- [ ] `initialEntries={['/about']}` に変えると About ページが表示される

### 画面イメージ

```
Lesson 01: Hello Router

こんにちは！ここは Home ページです。
```

`initialEntries={['/about']}` に変えると：

```
Lesson 01: Hello Router

React Router へようこそ！ここは About ページです。
```

---

## App.tsx への接続方法

実装後、`src/App.tsx` を以下のように変更する：

```tsx
// コメントを外す
import HelloRouterLesson from './lessons/01-hello-router/HelloRouterLesson'

// Component: null を変更する
{ label: '01 Hello Router', Component: HelloRouterLesson },
```

---

## ヒント

```tsx
import { MemoryRouter, Routes, Route } from 'react-router-dom'

// MemoryRouter の initialEntries でどのパスから始めるか指定できる
<MemoryRouter initialEntries={['/']}>
  <Routes>
    <Route path="/" element={/* コンポーネントをここに */} />
    <Route path="/about" element={/* コンポーネントをここに */} />
  </Routes>
</MemoryRouter>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- BrowserRouter / MemoryRouter / Routes / Route の役割を1〜3行で書く -->
- **Router**（`MemoryRouter`）— ルーティング機能全体を包む器
- **Routes** — Route の一覧を管理する。一致したものだけを描画する
- **Route** — `path` とコンポーネントを対応させる1行
### 最小実装
```tsx
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
```

### 実務での型
```tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/component1" element={<MainContent selectedComponent="component1" />} />
          <Route path="/component2" element={<MainContent selectedComponent="component2" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

```

### 落とし穴
<!-- よくあるエラーと回避策 -->
３つの要素を入れ子にしないと動作しない
### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
`<Router>`を定義して遷移したいパスを指定する前に`<Routes>`を書いて、遷移パスの一覧を管理して`<Route>`でパスを設定