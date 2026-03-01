# Lesson 10: Layout Routes

## このレッスンで学ぶこと

複数のページで共通のレイアウト（ヘッダー・フッター・サイドバー）を持つ仕組み。

Lesson 05 のネストルートと同じ技術だが、目的が違う。
- Lesson 05：**タブ切り替え**のような UI
- Lesson 10：**全ページ共通のレイアウト** を DRY に書く

Layout コンポーネントを path を持たないルートとして定義することがポイント。

```
Layout（path なし）        ← ヘッダー・フッターはここ
  ├── Route path="/"      ← Home の中身だけ Outlet に入る
  ├── Route path="/about"
  └── Route path="/contact"
```

---

## 何を実装するか

`src/lessons/10-layout-routes/LayoutRoutesLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `Layout` コンポーネントを作る（ヘッダー・フッター・`<Outlet />` を含む）
- [ ] path を持たない `<Route element={<Layout />}>` で全ページを囲む
- [ ] Home / About / Contact の3ページを Layout の子ルートにする
- [ ] ページを切り替えてもヘッダーとフッターが消えない

### 画面イメージ

どのページでも共通のヘッダーとフッターが表示される：

```
╔═══════════════════════════╗
║  My App  [Home] [About] [Contact]  ║  ← ヘッダー（常に表示）
╠═══════════════════════════╣
║                           ║
║  Home ページの内容         ║  ← Outlet（ページごとに変わる）
║                           ║
╠═══════════════════════════╣
║  © 2025 My App            ║  ← フッター（常に表示）
╚═══════════════════════════╝
```

---

## App.tsx への接続方法

```tsx
import LayoutRoutesLesson from './lessons/10-layout-routes/LayoutRoutesLesson'
{ label: '10 Layout Routes', Component: LayoutRoutesLesson },
```

---

## ヒント

```tsx
// path を持たない Layout ルート
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>

// Layout コンポーネント
function Layout() {
  return (
    <div>
      <header>
        <span>My App</span>
        <NavLink to="/">Home</NavLink>
        {/* ... */}
      </header>
      <main>
        <Outlet />  {/* ← ページの中身がここに入る */}
      </main>
      <footer>© 2025 My App</footer>
    </div>
  )
}
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Layout Routes の役割を1〜3行で書く -->

### 最小実装
```tsx
// 最もシンプルな Layout Route の書き方を書く
```

### 実務での型
```tsx
// よく使うパターンを書く
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
