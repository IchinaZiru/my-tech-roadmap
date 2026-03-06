# Lesson 09: Dependent Queries（依存クエリ）

## このレッスンで学ぶこと

### 「1番目のデータが取れてから2番目を取りたい」

例：投稿を取得 → その投稿の `userId` でユーザー情報を取得

このとき、`userId` が取得できるまで2番目のクエリを**実行しない**ようにしたい。

### enabled オプション

`enabled: false` にするとクエリは実行されない。
`enabled: !!userId` にすると `userId` が `truthy` になったとき自動で実行される。

```tsx
useQuery({
  queryKey: ['user', userId],
  queryFn: ...,
  enabled: !!userId,  // userId が undefined/null/0 のとき実行しない
})
```

---

## 何を実装するか

`src/lessons/09-dependent-queries/DependentQueriesLesson.tsx` に以下を実装する。

### 実装チェックリスト
- [ ] 1番目のクエリ（投稿）で `post.userId` を取得する
- [ ] 2番目のクエリに `enabled: !!userId` を設定する
- [ ] 1番目の取得が完了する前は「Step 1 完了後に取得します...」と表示する
- [ ] 2番目のクエリが自動で起動し、ユーザー名が表示されることを確認する

### 画面イメージ

```
── Step 1: 投稿を取得 ──
sunt aut facere repellat provident...

── Step 2: 投稿者のユーザー情報を取得 ──
（Step 1 完了前）Step 1 完了後に取得します...
（Step 1 完了後）Leanne Graham
```

---

## App.tsx への接続方法

```tsx
import DependentQueriesLesson from './lessons/09-dependent-queries/DependentQueriesLesson'
{ label: '09 Dependent Queries', Component: DependentQueriesLesson },
```

---

## ヒント

### enabled で連鎖させる

```tsx
const { data: post } = useQuery({
  queryKey: ['post', 1],
  queryFn: ...,
})

const userId = post?.userId  // post が undefined なら userId も undefined

const { data: user } = useQuery({
  queryKey: ['user', userId],
  queryFn: async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return res.json()
  },
  enabled: !!userId,  // userId が truthy になったら自動実行
})
```

### `!!` の意味

`!!値` は「値が truthy であれば true、falsy であれば false」を返す。
- `!!undefined` → `false`
- `!!1` → `true`

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- enabled オプションが「クエリの実行条件」を制御することを書く -->

### 最小実装
```tsx
// enabled を使った依存クエリの最小コード
```

### 実務での型
```tsx
// 3つ以上のクエリを連鎖させるパターン
```

### 落とし穴
<!-- enabled: userId のようにしたとき、userId === 0 で動かないケース -->

### 説明できる状態
<!-- なぜ enabled が必要なのか（userId が undefined のまま fetch するとどうなるか）を説明できる -->
