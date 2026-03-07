# Lesson 05: Refetching

## このレッスンで学ぶこと

### データの再取得には3種類ある

| 種類 | 設定 | タイミング |
|------|------|-----------|
| ウィンドウフォーカス時 | `refetchOnWindowFocus` | タブに戻ったとき |
| 定期的な自動再取得 | `refetchInterval` | 指定ミリ秒ごと |
| 手動再取得 | `refetch()` | ボタンなどで明示的に呼ぶ |

### isFetching とは

`isPending` は「初回データがない状態」。
`isFetching` は「今まさにリクエスト中」（再取得も含む）。

手動再取得中のインジケーター表示に使う。

---

## 何を実装するか

`src/lessons/05-refetching/RefetchingLesson.tsx` に以下を実装する。

### 実装チェックリスト
- [ ] 「手動で再取得」ボタンを作り、クリックで `refetch()` を呼ぶ
- [ ] `isFetching` が `true` のとき「取得中...」をボタンの横に表示する
- [ ] `refetchInterval: 5000` で5秒ごとの自動再取得を試す（Network タブで確認）
- [ ] `refetchOnWindowFocus: false` にして、タブ切り替えでの再取得を止める

### 画面イメージ

```
[再取得] 取得中...

• Post 1: sunt aut facere...
• Post 2: qui est esse...
• Post 3: ea molestias...
• Post 4: eum et est...
• Post 5: nesciunt iure...
```

---

## App.tsx への接続方法

```tsx
import RefetchingLesson from './lessons/05-refetching/RefetchingLesson'
{ label: '05 Refetching', Component: RefetchingLesson },
```

---

## ヒント

### refetch() の使い方

```tsx
const { data, isFetching, refetch } = useQuery({ ... })

// ボタンのクリックで呼ぶ
<button onClick={() => refetch()}>再取得</button>
```

### refetchInterval の注意点

`refetchInterval` はタブが非表示でも動き続ける（バックグラウンドでリクエストが飛ぶ）。
確認後は外すかコメントアウトしておくとよい。

### isPending と isFetching の使い分け

```
初回表示のローディング → isPending
再取得中のインジケーター → isFetching
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- isPending と isFetching の違いを自分の言葉で説明する -->

### 最小実装
```tsx
// 手動 refetch ボタンの最小コード
```

### 実務での型
```tsx
// refetchInterval を条件付きで使うパターン
// refetchInterval: isActive ? 5000 : false
```

### 落とし穴
<!-- refetchInterval を外し忘れたときに起きること -->

### 説明できる状態
<!-- isFetching と isPending の違いを具体例で説明できる -->
