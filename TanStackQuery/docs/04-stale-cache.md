# Lesson 04: Stale Time & Cache

## このレッスンで学ぶこと

### TanStack Query のデータには「鮮度」がある

取得したデータは、時間が経つと「古い（stale）」と判定される。
古いと判定されると、次のタイミングで自動再取得される。

**自動再取得のトリガー：**
- ウィンドウにフォーカスが戻ったとき
- ネットワークが再接続されたとき
- コンポーネントが再マウントされたとき

### staleTime とは

「何ミリ秒間はデータを新鮮とみなすか」を指定するオプション。

```
staleTime: 0       → 取得直後にもう「古い」（デフォルト）
staleTime: 30000   → 30秒間は「新鮮」なので再取得しない
staleTime: Infinity → 永久に「新鮮」（手動操作しない限り再取得しない）
```

### gcTime（旧 cacheTime）とは

「キャッシュを何ミリ秒間メモリに保持するか」。
`staleTime` はいつ再取得するかの話、`gcTime` はいつキャッシュを消すかの話。

---

## 何を実装するか

`src/lessons/04-stale-cache/StaleCacheLesson.tsx` に以下を実装する。

### 実装チェックリスト
- [ ] `staleTime: 0` のクエリと `staleTime: 30_000` のクエリを並べて作る
- [ ] ブラウザのタブを別のサイトに切り替えて戻る
- [ ] `staleTime: 0` の方だけ Network タブに再取得が記録されることを確認する
- [ ] （おまけ）`gcTime: 5000` にして、5秒後に再度クエリを呼ぶとネットワークリクエストが走ることを確認する

### 画面イメージ

```
┌───────────────────┐  ┌───────────────────┐
│ staleTime: 0      │  │ staleTime: 30秒    │
│（すぐ古くなる）    │  │（30秒は新鮮）      │
│                   │  │                   │
│ タイトル: ...     │  │ タイトル: ...     │
└───────────────────┘  └───────────────────┘

タブを切り替えて戻ると、左だけ再取得されます。
```

---

## App.tsx への接続方法

```tsx
import StaleCacheLesson from './lessons/04-stale-cache/StaleCacheLesson'
{ label: '04 Stale & Cache', Component: StaleCacheLesson },
```

---

## ヒント

### 2つのクエリを並べる

```tsx
const freshQuery = useQuery({
  queryKey: ['post-fresh', 1],
  queryFn: ...,
  staleTime: 0,
})

const staleQuery = useQuery({
  queryKey: ['post-stale', 1],
  queryFn: ...,
  staleTime: 30_000,
})
```

### 確認方法

ブラウザの DevTools → Network タブ → XHR/Fetch でリクエストを監視する。
タブを切り替えて戻ったとき、`staleTime: 0` のクエリだけリクエストが発生する。

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- staleTime と gcTime の違いを自分の言葉で説明する -->

### 最小実装
```tsx
// staleTime を設定した useQuery
```

### 実務での型
```tsx
// QueryClient のデフォルト staleTime を設定する方法
// new QueryClient({ defaultOptions: { queries: { staleTime: 60_000 } } })
```

### 落とし穴
<!-- staleTime と gcTime を混同したときの誤解 -->

### 説明できる状態
<!-- タブを切り替えたときに再取得が起きる理由を説明できる -->
