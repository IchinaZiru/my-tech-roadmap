# Lesson 04: URL Params

## このレッスンで学ぶこと

URL の一部を「変数」として扱う仕組み。
Route の `path` に `:名前` と書くと、その部分が変数になる。

```
/users/1   →  userId = "1"
/users/42  →  userId = "42"
```

`useParams()` フックでその値を取得できる。
商品詳細・ユーザープロフィールなど「同じ構造で内容だけ違うページ」に必須の技術。

---

## 何を実装するか

`src/lessons/04-url-params/UrlParamsLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `/` にユーザー一覧ページを作る（3人分）
- [ ] `/users/:userId` にユーザー詳細ページを作る
- [ ] `useParams` で `:userId` を取得して表示する
- [ ] 一覧の各ユーザー名が詳細ページへの `<Link>` になっている

### 画面イメージ

一覧ページ（`/`）：

```
Lesson 04: URL Params

ユーザー一覧
- [Alice]
- [Bob]
- [Carol]
```

Alice をクリックすると詳細（`/users/1`）：

```
Lesson 04: URL Params

ユーザー詳細
ID: 1
名前: Alice
[← 一覧に戻る]
```

---

## App.tsx への接続方法

```tsx
import UrlParamsLesson from './lessons/04-url-params/UrlParamsLesson'
{ label: '04 URL Params', Component: UrlParamsLesson },
```

---

## ヒント

```tsx
import { useParams } from 'react-router-dom'

// Route の定義
<Route path="/users/:userId" element={<UserDetail />} />

// useParams でパラメータを取得
function UserDetail() {
  const { userId } = useParams()
  // userId は文字列になる
}
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- URL パラメータと useParams の役割を1〜3行で書く -->

### 最小実装
```tsx
// 最もシンプルな useParams の使い方を書く
```

### 実務での型
```tsx
// よく使うパターンを書く
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
