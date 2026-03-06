# Lesson 02: Loading & Error States

## このレッスンで学ぶこと

### データ取得には「3つの状態」がある

```
isPending（取得中）→ isError（失敗）
                  → isSuccess / data あり（成功）
```

TanStack Query はこの3状態を自動的に管理してくれる。
自分で `useState` で `loading` フラグを管理する必要がない。

### isPending と isFetching の違い

| | 意味 |
|--|------|
| `isPending` | データがまだ1度も取得されていない（初回ロード中） |
| `isFetching` | 現在取得中（再取得も含む） |

初回表示のローディングには `isPending` を使う。

---

## 何を実装するか

`src/lessons/02-loading-error/LoadingErrorLesson.tsx` に以下を実装する。

### 実装チェックリスト
- [ ] `isPending` が `true` のとき「読み込み中...」を表示する
- [ ] `isError` が `true` のときエラーメッセージ（`error.message`）を表示する
- [ ] `data` がある（成功）とき投稿タイトルと本文を表示する
- [ ] （おまけ）URL を `posts/9999` に変えてエラー状態を確認する

### 画面イメージ

```
【読み込み中】
読み込み中...

【成功時】
タイトル: sunt aut facere...
本文: quia et suscipit...

【エラー時】
エラー: HTTP error: 404
```

---

## App.tsx への接続方法

```tsx
import LoadingErrorLesson from './lessons/02-loading-error/LoadingErrorLesson'
{ label: '02 Loading & Error', Component: LoadingErrorLesson },
```

---

## ヒント

### 3状態の出し分け方

```tsx
if (isPending) return <p>読み込み中...</p>
if (isError) return <p>エラー: {/* error の型に注意 */}</p>
return <div>{/* data を表示 */}</div>
```

### error の型

TanStack Query v5 では `error` は `Error` 型。
`error.message` でエラーメッセージを取得できる。

### queryFn でエラーを投げる

fetch は 404 でもエラーを投げない。
`res.ok` を確認して手動で `throw` する必要がある。

```tsx
if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- isPending / isError / data の3状態を自分の言葉で説明する -->

### 最小実装
```tsx
// 動いた最小コードを書く
```

### 実務での型
```tsx
// エラーを独自型で扱うパターン
```

### 落とし穴
<!-- fetch は 404 でもエラーにならない理由 -->

### 説明できる状態
<!-- 3状態の管理を自分で useState で書くより楽な理由を説明できる -->
