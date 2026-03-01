# Lesson 03: NavLink

## このレッスンで学ぶこと

`<NavLink>` は `<Link>` の強化版。
**現在表示しているページと一致するリンクに、自動でクラスやスタイルを付与できる**。

ナビゲーションバーで「今どこにいるか」を示すアクティブ表示に使う。

```tsx
// className に関数を渡すと isActive を受け取れる
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  About
</NavLink>
```

---

## 何を実装するか

`src/lessons/03-nav-link/NavLinkLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `<Link>` を `<NavLink>` に置き換える
- [ ] アクティブなリンクを太字にする（`style` に関数を渡す）
- [ ] アクティブなリンクに下線を引く（`className` に関数を渡す）

### 画面イメージ

About を選択中の状態：

```
Lesson 03: NavLink

[Home]  **[About]**  [Contact]
         ̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲

About ページです。
```

（現在のページが太字 + 下線）

---

## App.tsx への接続方法

```tsx
import NavLinkLesson from './lessons/03-nav-link/NavLinkLesson'
{ label: '03 NavLink', Component: NavLinkLesson },
```

---

## ヒント

```tsx
import { NavLink } from 'react-router-dom'

// style に関数を渡す方法
<NavLink
  to="/"
  style={({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  })}
>
  Home
</NavLink>

// className に関数を渡す方法
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'nav-active' : ''}
>
  About
</NavLink>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- NavLink と Link の違いを1〜3行で書く -->

### 最小実装
```tsx
// 最もシンプルな NavLink の使い方を書く
```

### 実務での型
```tsx
// よく使うパターンを書く
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
