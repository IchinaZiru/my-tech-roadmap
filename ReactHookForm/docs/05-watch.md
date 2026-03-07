# Lesson 05: watch（リアルタイム監視）

## このレッスンで学ぶこと

`watch` を使って入力値をリアルタイムに取得する。
`useState` なしで、入力しながら別の場所に値を反映させることができる。

### watch の使い方

```tsx
// 全フィールドを監視
const watchedValues = watch()
// → { username: 'taro', password: '...', confirmPassword: '...' }

// 特定のフィールドだけ監視
const username = watch('username')
// → 'taro'

// 複数のフィールドをまとめて監視
const [password, confirmPassword] = watch(['password', 'confirmPassword'])
```

### なぜ watch が必要か

RHF はパフォーマンスのため、デフォルトでは「フォームの入力値が変わっても React は再レンダリングしない」。
`watch` を呼び出すことで「この値が変わったら再レンダリングする」と RHF に伝える。

---

## 何を実装するか

`src/lessons/05-watch/WatchLesson.tsx` にリアルタイムプレビュー付きフォームを作る。

### 実装チェックリスト

- [ ] `watch` を `useForm` から取り出す
- [ ] `username` をリアルタイム監視して、文字数カウンター（例: `3 / 20`）を表示する
- [ ] `password` と `confirmPassword` をリアルタイム監視して、一致するか判定する
- [ ] 一致するときは「✓ パスワードが一致しています」（緑）、不一致は「✗ 一致しません」（赤）と表示する
- [ ] 画面右側（またはフォームの下）にリアルタイムプレビューエリアを作り、全入力値を表示する

### 画面イメージ

```
Lesson 05: watch

ユーザー名  [taro______________]    5 / 20
パスワード  [••••••____________]
確認        [••••••____________]    ✓ パスワードが一致しています

[送信]

--- リアルタイムプレビュー ---
username: "taro"
password: (入力中)
confirmPassword: (入力中)
```

---

## ヒント

```tsx
// watch で複数フィールドを取得
const [password, confirmPassword] = watch(['password', 'confirmPassword'])

// パスワード一致チェック
const passwordMatch = password === confirmPassword && password !== ''

// 文字数カウンター（watch した値の length を使う）
const username = watch('username') ?? ''
```

`watch` の返り値は、まだ入力していないフィールドでは `undefined` になる場合がある。
`?? ''`（nullish coalescing）で `undefined` のときに空文字列にするのが安全。

---

## App.tsx への接続方法

```tsx
import WatchLesson from './lessons/05-watch/WatchLesson'
{ label: '05 watch', Component: WatchLesson },
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
