# Lesson 03: Query Keys

## このレッスンで学ぶこと

### queryKey はキャッシュの「住所」

TanStack Query は、取得したデータを `queryKey` をもとに保存する。
同じ `queryKey` なら同じキャッシュを参照し、
違う `queryKey` なら別のキャッシュとして扱う。

```
['post', 1]  →  キャッシュA（投稿1番のデータ）
['post', 2]  →  キャッシュB（投稿2番のデータ）
['posts']    →  キャッシュC（投稿リストのデータ）
```

### なぜ配列にするのか

文字列だけより構造を持たせやすく、部分一致での無効化（後のレッスン）が使えるから。

```tsx
// ID によって動的に変わるキー
queryKey: ['post', postId]
```

`postId` が変わると、TanStack Query は別のキャッシュを取得（またはキャッシュから返却）する。

---

## 何を実装するか

`src/lessons/03-query-keys/QueryKeysLesson.tsx` に以下を実装する。

### 実装チェックリスト
- [ ] `useState` で `postId`（初期値: 1）を管理する
- [ ] `queryKey` を `['post', postId]` のように変数を含む形にする
- [ ] ボタン（1・2・3番）で `postId` を切り替えると別の投稿が表示される
- [ ] 一度表示した投稿に戻ったとき、即座に表示される（キャッシュが効いている）ことを確認する

### 画面イメージ

```
[投稿 1] [投稿 2] [投稿 3]

── 投稿 1 ──
タイトル: sunt aut facere...
本文: quia et suscipit...
```

---

## App.tsx への接続方法

```tsx
import QueryKeysLesson from './lessons/03-query-keys/QueryKeysLesson'
{ label: '03 Query Keys', Component: QueryKeysLesson },
```

---

## ヒント

### useState と useQuery を組み合わせる

```tsx
const [postId, setPostId] = useState(1)

const { data } = useQuery({
  queryKey: ['post', postId],  // postId が変わると自動で再取得
  queryFn: async () => { ... },
})
```

### キャッシュの効果を確認する方法

1. 投稿1 → 投稿2 → 投稿1 の順でボタンを押す
2. 投稿1 に戻ったとき、「読み込み中...」が出ない（キャッシュが使われている）
3. Network タブを開くと、3回目のリクエストが発生していないことがわかる

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- queryKey がキャッシュの住所である、ということを自分の言葉で説明する -->

### 最小実装
```tsx
// 動的な queryKey を使った最小コード
```

### 実務での型
```tsx
// ネストしたキーの例: ['users', userId, 'posts']
```

### 落とし穴
<!-- queryKey を文字列だけにしたときの問題 -->

### 説明できる状態
<!-- queryKey が変わると何が起きるかを説明できる -->
