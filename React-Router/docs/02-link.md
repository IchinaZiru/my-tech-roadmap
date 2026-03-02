# Lesson 02: Link

## このレッスンで学ぶこと

`<Link>` は React Router が提供するリンクコンポーネント。
HTML の `<a href="...">` の代わりに使う。

| 比較 | `<a href="...">` | `<Link to="...">` |
|------|-----------------|-------------------|
| 画面遷移 | ページ全体をリロード | React の状態を保ったまま遷移 |
| URL | 変わる | 変わる（BrowserRouter の場合） |
| 速さ | 遅い（再読み込み） | 速い（差分だけ更新） |

Router の中でしか使えない点に注意（MemoryRouter や BrowserRouter の外に書くとエラー）。

---

## 何を実装するか

`src/lessons/02-link/LinkLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `<MemoryRouter>` で全体を囲む
- [ ] Home / About / Contact の3ページを `<Route>` で定義する
- [ ] 各ページへの `<Link>` を含むナビゲーションを作る
- [ ] リンクをクリックするとページが切り替わる

### 画面イメージ

```
Lesson 02: Link

[Home] [About] [Contact]

こんにちは！ここは Home ページです。
```

About をクリックすると：

```
Lesson 02: Link

[Home] [About] [Contact]

About ページです。
```

---

## App.tsx への接続方法

```tsx
import LinkLesson from './lessons/02-link/LinkLesson'
{ label: '02 Link', Component: LinkLesson },
```

---

## ヒント

```tsx
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom'

// Link は必ず Router の中に置く
<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
</nav>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Link と <a> の違いを1〜3行で書く -->

### 最小実装
```tsx
// 最もシンプルな Link の使い方を書く
```

### 実務での型
```tsx
// よく使うパターンを書く
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
