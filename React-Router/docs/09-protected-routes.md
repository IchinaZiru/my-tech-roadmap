# Lesson 09: Protected Routes

## このレッスンで学ぶこと

ログインしていないユーザーが特定のページにアクセスしようとしたとき、ログインページにリダイレクトする仕組み。

実現方法：「認証が必要なルートを包む専用コンポーネント」を作る。

```
未ログイン → /dashboard にアクセス → /login にリダイレクト
ログイン済み → /dashboard にアクセス → ダッシュボードを表示
```

この「包む専用コンポーネント」パターンは、**カスタムルートコンポーネント**と呼ばれる。

---

## 何を実装するか

`src/lessons/09-protected-routes/ProtectedRoutesLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `isLoggedIn` を `useState` で管理する（初期値: `false`）
- [ ] `/login` に「ログイン」ボタンを置く（クリックすると isLoggedIn が true になる）
- [ ] `/dashboard` を認証が必要なページにする
- [ ] `RequireAuth` コンポーネントを作る（未認証なら `/login` にリダイレクト）
- [ ] ログイン前に `/dashboard` にアクセスすると `/login` に飛ばされる
- [ ] ログイン後は `/dashboard` が表示される

### 画面イメージ

未ログイン状態で `/dashboard` にアクセスすると自動で `/login` へ：

```
Lesson 09: Protected Routes

ログインしてください
[ログイン]
```

ログイン後 `/dashboard`：

```
Lesson 09: Protected Routes

ダッシュボード
ようこそ！
[ログアウト]
```

---

## App.tsx への接続方法

```tsx
import ProtectedLesson from './lessons/09-protected-routes/ProtectedRoutesLesson'
{ label: '09 Protected Routes', Component: ProtectedLesson },
```

---

## ヒント

```tsx
import { Navigate, Outlet } from 'react-router-dom'

// RequireAuth: 未認証なら /login にリダイレクト
function RequireAuth({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}

// Route の定義
<Route element={<RequireAuth isLoggedIn={isLoggedIn} />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Route>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Protected Routes の仕組みを1〜3行で書く -->

### 最小実装
```tsx
// 最もシンプルな RequireAuth の書き方を書く
```

### 実務での型
```tsx
// よく使うパターンを書く
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
