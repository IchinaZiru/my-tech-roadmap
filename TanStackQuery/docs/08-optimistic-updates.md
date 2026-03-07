# Lesson 08: Optimistic Updates（楽観的更新）

## このレッスンで学ぶこと

### 「サーバーの応答を待たずに画面を更新する」

通常のフロー：
```
ボタンクリック → サーバーへリクエスト → 応答待ち → 画面更新
```

楽観的更新：
```
ボタンクリック → 即座に画面更新 → サーバーへリクエスト → 失敗したら元に戻す
```

SNSの「いいね」ボタンが押した瞬間に増えるのはこの仕組み。

### 3つのコールバック

| コールバック | タイミング | 役割 |
|------------|---------|------|
| `onMutate` | `mutate()` 呼び出し直後 | 楽観的にUIを更新、ロールバック用のスナップショットを保存 |
| `onError` | ミューテーション失敗時 | `onMutate` で保存したスナップショットに戻す |
| `onSettled` | 成功・失敗どちらでも | `invalidateQueries` でサーバーと最終同期 |

---

## 何を実装するか

`src/lessons/08-optimistic-updates/OptimisticUpdatesLesson.tsx` に以下を実装する。

### 実装チェックリスト
- [ ] 「いいね」ボタンを押すと、サーバーの応答前に `likes` が +1 される（`onMutate`）
- [ ] `onMutate` でボタンを押す前のリスト（スナップショット）を返す
- [ ] `onError` でスナップショットを使ってリストを元に戻す
- [ ] `onSettled` でクエリを無効化してサーバーと同期する

### 画面イメージ

```
First Post      ❤️ 10 [いいね]
Second Post     ❤️ 5  [いいね]
Third Post      ❤️ 23 [いいね]

→ 「Second Post」のいいねをクリックすると即座に 6 に増える
```

---

## App.tsx への接続方法

```tsx
import OptimisticUpdatesLesson from './lessons/08-optimistic-updates/OptimisticUpdatesLesson'
{ label: '08 Optimistic Updates', Component: OptimisticUpdatesLesson },
```

---

## ヒント

### onMutate でローカル状態を先に更新する

このレッスンではキャッシュではなく `useState` で管理しているので、
`setState` で直接 `likes` を +1 する。

```tsx
onMutate: (postId) => {
  // 現在の状態を保存（ロールバック用）
  const previousPosts = posts

  // 楽観的に更新
  setPosts((prev) => prev.map((p) =>
    p.id === postId ? { ...p, likes: p.likes + 1 } : p
  ))

  // ロールバック用のスナップショットを返す
  return { previousPosts }
},
```

### onError でロールバックする

```tsx
onError: (_err, _postId, context) => {
  // onMutate が返した context を受け取る
  if (context?.previousPosts) {
    setPosts(context.previousPosts)
  }
},
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- 楽観的更新とは何か、ユーザー体験とのトレードオフを書く -->

### 最小実装
```tsx
// onMutate / onError / onSettled の骨格コード
```

### 実務での型
```tsx
// useQueryClient().setQueryData を使ったキャッシュ直接更新パターン
```

### 落とし穴
<!-- onMutate の return を忘れると context が undefined になる -->

### 説明できる状態
<!-- なぜロールバックが必要なのかをユーザー体験の観点から説明できる -->
