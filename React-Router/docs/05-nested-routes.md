# Lesson 05: Nested Routes

## このレッスンで学ぶこと

ルートをネスト（入れ子）にする仕組み。
親ルートのコンポーネントは常に表示されたまま、子ルートの内容だけが `<Outlet />` の位置に入れ替わる。

```
/settings            → Settings レイアウト（常に表示）+ デフォルト内容
/settings/profile    → Settings レイアウト + Profile の内容
/settings/notices    → Settings レイアウト + Notices の内容
```

タブ切り替えや、サイドバーが固定されたレイアウトに使う。

---

## 何を実装するか

`src/lessons/05-nested-routes/NestedRoutesLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `/settings` を親ルートにする（`Settings` コンポーネントを作る）
- [ ] `Settings` コンポーネントの中に `<Outlet />` を置く
- [ ] `/settings/profile` と `/settings/notices` を子ルートとして定義する
- [ ] `Settings` コンポーネント内のリンクで子ルートに切り替えられる
- [ ] 親コンポーネント（Settings のタイトルとリンク）が消えずに残る

### 画面イメージ

`/settings/profile` を選択中：

```
Lesson 05: Nested Routes

─── 設定 ───────────────────
[プロフィール] [通知]

プロフィール設定
名前: ○○
```

`/settings/notices` をクリックすると（設定ヘッダーはそのまま）：

```
─── 設定 ───────────────────
[プロフィール] [通知]

通知設定
メール通知: オン
```

---

## App.tsx への接続方法

```tsx
import NestedRoutesLesson from './lessons/05-nested-routes/NestedRoutesLesson'
{ label: '05 Nested Routes', Component: NestedRoutesLesson },
```

---

## ヒント

```tsx
import { Outlet } from 'react-router-dom'

// 親コンポーネントに Outlet を置く
function Settings() {
  return (
    <div>
      <h3>設定</h3>
      <nav>
        <Link to="/settings/profile">プロフィール</Link>
        <Link to="/settings/notices">通知</Link>
      </nav>
      <Outlet />  {/* ← 子ルートがここに入る */}
    </div>
  )
}

// Route の入れ子
<Route path="/settings" element={<Settings />}>
  <Route path="profile" element={<Profile />} />
  <Route path="notices" element={<Notices />} />
</Route>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Nested Routes と Outlet の役割を1〜3行で書く -->

### 最小実装
```tsx
// Route の入れ子
<Route path="/settings" element={<Settings />}>
  <Route path="profile" element={<Profile />} />
  <Route path="notices" element={<Notices />} />
</Route>
```

### 実務での型
```tsx
<Route path='profile' element={<Profile />} />
<Route path='notices' element={<Notices />} />
```

### 落とし穴
<!-- よくあるエラーと回避策 -->
入れ子でのパスは相対パスにする

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
入れ子にして相対パスに設定できれば書き換えする必要がなくなる
子コンポーネントの描画場所を`</Outlet>`を使用することで指定できる