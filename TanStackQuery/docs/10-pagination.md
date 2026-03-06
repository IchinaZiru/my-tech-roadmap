# Lesson 10: Pagination（ページネーション）

## このレッスンで学ぶこと

### 「ページを切り替えるたびにちらつく」問題

`page` が変わると `queryKey` が変わる → 新しいキャッシュが作られる → `isPending` が `true` になる → 画面が一瞬消える。

これを解決するのが **`placeholderData: keepPreviousData`**。

### keepPreviousData とは

新しいデータが来るまで「前のページのデータ」を表示し続けるオプション。

```
page 1 のデータ表示中 → page 2 に切り替え → 新データ取得中も page 1 を表示 → page 2 のデータ表示
```

`isPlaceholderData` が `true` のとき、古いデータが表示されている状態。

---

## 何を実装するか

`src/lessons/10-pagination/PaginationLesson.tsx` に以下を実装する。

### 実装チェックリスト
- [ ] `useState` で `page`（初期値: 1）を管理する
- [ ] `queryKey` に `['posts', page]` を使う
- [ ] 「前のページ」「次のページ」ボタンを作る
- [ ] `placeholderData: keepPreviousData` を設定してちらつきをなくす
- [ ] `isPlaceholderData` が `true` のとき「更新中...」を薄く表示する

### 画面イメージ

```
更新中...（ページ切り替え中のみ）

• sunt aut facere repellat...
• qui est esse...
• ea molestias quasi...
• eum et est occaecati...
• nesciunt iure omnis dolorem...

[← 前のページ] ページ 1 [次のページ →]
```

---

## App.tsx への接続方法

```tsx
import PaginationLesson from './lessons/10-pagination/PaginationLesson'
{ label: '10 Pagination', Component: PaginationLesson },
```

---

## ヒント

### keepPreviousData のインポート

TanStack Query v5 では関数として import する：

```tsx
import { useQuery, keepPreviousData } from '@tanstack/react-query'

useQuery({
  placeholderData: keepPreviousData,
})
```

### ボタンの制御

```tsx
// 「前のページ」は page 1 で無効
// 「次のページ」は isPlaceholderData のとき無効（取得中に押せないようにする）
<button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
  ← 前のページ
</button>
<button disabled={isPlaceholderData} onClick={() => setPage(p => p + 1)}>
  次のページ →
</button>
```

### JSONPlaceholder のページネーション

```
?_page=1&_limit=5  → 1〜5件目
?_page=2&_limit=5  → 6〜10件目
```

合計100件あるので、最大ページは20。

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- keepPreviousData がなぜちらつきを防ぐのかを書く -->

### 最小実装
```tsx
// pagination の最小コード
```

### 実務での型
```tsx
// useInfiniteQuery（無限スクロール）との違い
```

### 落とし穴
<!-- isPlaceholderData のとき次のページボタンを無効にしないと問題が起きる理由 -->

### 説明できる状態
<!-- keepPreviousData と通常のページネーションのUXの違いを説明できる -->
