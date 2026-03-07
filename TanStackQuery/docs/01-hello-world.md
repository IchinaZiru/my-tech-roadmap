# Lesson 01: Hello World

## このレッスンで学ぶこと

### TanStack Query の「最小構成」を動かす

TanStack Query を使う最小手順は3つ。

1. `QueryClient` を作る（キャッシュの入れ物）
2. `QueryClientProvider` でアプリを包む（すでに `main.tsx` に書いてある）
3. `useQuery` でデータを取得する

このレッスンでは **3番だけ**を実装する。

### useQuery とは

`fetch` を呼ぶだけのコードに、「キャッシュ」「ローディング状態」「エラー処理」を自動でつけてくれるフック。

```
useQuery = fetch + キャッシュ + isPending + isError
```

---

## 何を実装するか

`src/lessons/01-hello-world/HelloWorldLesson.tsx` に以下を実装する。

### 実装チェックリスト
- [ ] `useQuery` を `@tanstack/react-query` から import する
- [ ] `queryKey` に `['post']` を指定する
- [ ] `queryFn` で `https://jsonplaceholder.typicode.com/posts/1` を fetch して JSON を返す
- [ ] `data.title` と `data.body` を画面に表示する

### 画面イメージ

```
Lesson 01: Hello World

タイトル: sunt aut facere repellat provident occaecati...
本文: quia et suscipit suscipit recusandae consequuntur...
```

---

## App.tsx への接続方法

実装後、`src/App.tsx` を以下のように変更する：

```tsx
// コメントを外す
import HelloWorldLesson from './lessons/01-hello-world/HelloWorldLesson'

// Component: null を差し替える
{ label: '01 Hello World', Component: HelloWorldLesson },
```

---

## ヒント

### useQuery の基本構文

```tsx
const { data } = useQuery({
  queryKey: ['キャッシュのID'],
  queryFn: async () => {
    // fetch してデータを返す
    const res = await fetch('URL')
    return res.json()
  },
})
```

### queryKey のイメージ

配列で指定する。`['post']` は「post というキャッシュ」という意味。
同じ key なら同じキャッシュが使い回される。

### data が undefined のとき

最初の取得完了前は `data` が `undefined`。
`data?.title` のようにオプショナルチェーンを使うと安全。

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- useQuery とは何か、1〜2行で書く -->

### 最小実装
```tsx
// 動いた最小コードを書く
```

### 実務での型
```tsx
// 型引数をつけるパターン
// useQuery<Post>({ ... })
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
