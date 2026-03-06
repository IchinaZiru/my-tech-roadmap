# Lesson 07: Query Invalidation

## このレッスンで学ぶこと

### 「ミューテーション後にリストを更新したい」問題

投稿を作った後、リスト表示は自動では更新されない。
なぜなら `useQuery` はキャッシュを持っていて、勝手に再取得しないから。

解決策：**invalidateQueries（クエリの無効化）**

```
useMutation の onSuccess → queryClient.invalidateQueries → useQuery が再取得
```

### invalidateQueries とは

指定した `queryKey` のキャッシュを「古い」とマークして、再取得をトリガーするメソッド。

```tsx
queryClient.invalidateQueries({ queryKey: ['posts'] })
```

これを呼ぶと、`['posts']` に一致するクエリが自動的に再取得される。

### useQueryClient とは

`queryClient` をコンポーネントの中で使うためのフック。

---

## 何を実装するか

`src/lessons/07-invalidation/InvalidationLesson.tsx` に以下を実装する。

### 実装チェックリスト
- [ ] 投稿リストを `useQuery` で取得して表示する（`queryKey: ['posts']`）
- [ ] `useMutation` で新しい投稿のタイトルを送信する
- [ ] `onSuccess` の中で `queryClient.invalidateQueries({ queryKey: ['posts'] })` を呼ぶ
- [ ] 送信後にリストが自動更新されることを Network タブで確認する
- [ ] `useQueryClient()` で `queryClient` を取得していることを確認する

### 画面イメージ

```
タイトル: [          ] [追加]

── 投稿リスト ──
• Post 1: sunt aut facere...
• Post 2: qui est esse...
• Post 3: ea molestias...
...
```

---

## App.tsx への接続方法

```tsx
import InvalidationLesson from './lessons/07-invalidation/InvalidationLesson'
{ label: '07 Invalidation', Component: InvalidationLesson },
```

---

## ヒント

### useQueryClient の使い方

```tsx
import { useQueryClient } from '@tanstack/react-query'

const queryClient = useQueryClient()

// ミューテーション成功後に呼ぶ
queryClient.invalidateQueries({ queryKey: ['posts'] })
```

### 部分一致での無効化

```tsx
// ['post', 1] も ['post', 2] も全部まとめて無効化
queryClient.invalidateQueries({ queryKey: ['post'] })
```

配列の前方一致で複数のクエリを一度に無効化できる。

### JSONPlaceholder の注意

実際にはデータが保存されないので、リストに新しい投稿は追加されない。
でも再取得のリクエストが Network タブに記録される（それを確認する）。

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- invalidateQueries が「キャッシュを古くする」ことの意味を書く -->

### 最小実装
```tsx
// useMutation + invalidateQueries の最小コード
```

### 実務での型
```tsx
// 複数のクエリをまとめて無効化するパターン
```

### 落とし穴
<!-- useQueryClient を QueryClientProvider の外で呼ぶとエラーになる -->

### 説明できる状態
<!-- ミューテーション後にリストを更新する流れを説明できる -->
