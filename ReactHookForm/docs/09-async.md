# Lesson 09: async（非同期送信）

## このレッスンで学ぶこと

フォーム送信時に API を呼び出す（非同期処理）パターン。
`isSubmitting` で送信中かどうかを判定して、ボタンを無効化したりローディング表示したりする。

### handleSubmit の async 対応

```tsx
// onSubmit を async にするだけで対応できる
const onSubmit = async (data: FormData) => {
  await fetch('/api/login', { method: 'POST', body: JSON.stringify(data) })
}

<form onSubmit={handleSubmit(onSubmit)}>
```

`handleSubmit` は `onSubmit` が Promise を返すとき、自動的に `isSubmitting` を `true` にしてくれる。

### isSubmitting で送信中を管理する

```tsx
const { formState: { isSubmitting } } = useForm()

// 送信中はボタンを無効化
<button type="submit" disabled={isSubmitting}>
  {isSubmitting ? '送信中...' : '送信'}
</button>
```

`isSubmitting` は `onSubmit` が実行中のとき `true`、完了したとき `false` になる。
これにより「二重送信」を防ぐことができる。

---

## 何を実装するか

`src/lessons/09-async/AsyncLesson.tsx` に非同期送信フォームを作る。

### 実装チェックリスト

- [ ] `onSubmit` を `async` 関数にする
- [ ] `await fakeLogin(data)` で 1.5 秒待つ（模擬API呼び出し）
- [ ] `formState.isSubmitting` でボタンを `disabled` にする
- [ ] 送信中は「送信中...」とボタンに表示する
- [ ] 成功時は「ログイン成功！」メッセージを表示する
- [ ] 失敗時は `catch` でエラーをキャッチして「ログインに失敗しました」を表示する

### 画面イメージ

```
Lesson 09: async — ログイン

メール     [__________________]
パスワード [__________________]

[ログイン]          ← 通常時
[送信中...] (無効)  ← 送信中

↓ 成功時
✓ ログイン成功！

↓ 失敗時
✗ ログインに失敗しました
```

---

## ヒント

```tsx
// 模擬APIコール（50%の確率で失敗する）
const fakeLogin = (data: FormData): Promise<void> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      Math.random() > 0.5 ? resolve() : reject(new Error('ログインに失敗しました'))
    }, 1500)
  )

// onSubmit の中でエラーをキャッチする
const onSubmit = async (data: FormData) => {
  try {
    await fakeLogin(data)
    // 成功時の処理
    setStatus('success')
  } catch (err) {
    // 失敗時の処理
    setStatus('error')
  }
}

// 送信中のボタン
<button type="submit" disabled={isSubmitting}>
  {isSubmitting ? '送信中...' : 'ログイン'}
</button>
```

`useState` で `status: 'idle' | 'success' | 'error'` を管理すると
成功・失敗・初期状態を切り替えやすい。

---

## App.tsx への接続方法

```tsx
import AsyncLesson from './lessons/09-async/AsyncLesson'
{ label: '09 async', Component: AsyncLesson },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念

### 最小実装
```tsx
```

### 実務での型
```tsx
```

### 落とし穴

### 説明できる状態
