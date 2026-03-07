# Lesson 06: Mutation

## このレッスンで学ぶこと

### useQuery と useMutation の違い

| | useQuery | useMutation |
|--|---------|-------------|
| 用途 | データを取得する（GET） | データを変更する（POST / PATCH / DELETE） |
| 実行タイミング | 自動（コンポーネントマウント時） | 手動（`mutate()` を呼んだとき） |
| キャッシュ | 自動管理 | 結果はキャッシュしない |

### useMutation の基本形

```
useMutation → mutationFn（API呼び出し）→ onSuccess / onError
```

`mutate(変数)` を呼ぶと `mutationFn(変数)` が実行される。

---

## 何を実装するか

`src/lessons/06-mutation/MutationLesson.tsx` に以下を実装する。

### 実装チェックリスト
- [ ] `useMutation` を import して `mutationFn` に POST リクエストの関数を渡す
- [ ] フォームで `title` と `body` を入力できるようにする
- [ ] 送信ボタンで `mutation.mutate({ title, body })` を呼ぶ
- [ ] `mutation.isPending` のとき送信ボタンを「送信中...」に変える
- [ ] `mutation.isSuccess` のとき作成された投稿（`mutation.data`）を表示する

### 画面イメージ

```
タイトル: [          ]
本文:     [          ]
         [投稿する   ]

── 作成成功 ──
ID: 101
タイトル: 入力した内容
```

---

## App.tsx への接続方法

```tsx
import MutationLesson from './lessons/06-mutation/MutationLesson'
{ label: '06 Mutation', Component: MutationLesson },
```

---

## ヒント

### useMutation の基本構文

```tsx
const mutation = useMutation({
  mutationFn: async (variables) => {
    const res = await fetch('URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(variables),
    })
    return res.json()
  },
  onSuccess: (data) => {
    // 成功後の処理（フォームリセットなど）
  },
})

// 呼び出し方
mutation.mutate({ title: '...', body: '...' })
```

### JSONPlaceholder の POST エンドポイント

```
POST https://jsonplaceholder.typicode.com/posts
```

実際にはデータが保存されないが、成功レスポンス（id: 101）が返ってくる。

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- useMutation と useQuery の違いを自分の言葉で書く -->

### 最小実装
```tsx
// 動いた最小コードを書く
```

### 実務での型
```tsx
// mutationFn の引数に型をつけるパターン
// useMutation<ReturnType, Error, Variables>
```

### 落とし穴
<!-- mutate() に渡す引数は1つだけ、という制限 -->

### 説明できる状態
<!-- mutation.isPending と mutation.isSuccess でUIを制御できることを説明できる -->
