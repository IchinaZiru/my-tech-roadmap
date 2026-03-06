# Lesson 01: Hello World

## このレッスンで学ぶこと

React Hook Form の最小構成。「フォームを送信したら、入力値をコンソールで確認できる」状態を作る。

### なぜ useForm を使うのか

React の素のフォームは `onChange` ハンドラと `useState` を自分で書く必要がある。

```tsx
// React の素のやり方（参考）
const [name, setName] = useState('')
<input value={name} onChange={e => setName(e.target.value)} />
```

React Hook Form を使うと、`useState` を書かずにフォームの値を管理できる。
`register` が input の `onChange` や `ref` を自動でセットアップしてくれるため。

### 3つのキーワード

| キーワード | 役割 |
|-----------|------|
| `useForm()` | フォーム管理を開始する。`register` と `handleSubmit` を返す |
| `register('fieldName')` | input を RHF に登録する。返り値を input に spread する |
| `handleSubmit(fn)` | form の `onSubmit` に渡す。バリデーション通過後に `fn(data)` を呼ぶ |

---

## 何を実装するか

`src/lessons/01-hello-world/HelloWorldLesson.tsx` にシンプルなフォームを作る。

### 実装チェックリスト

- [ ] `useForm()` を呼び出して `{ register, handleSubmit }` を取り出す
- [ ] `<input {...register('username')} />` で input を登録する
- [ ] `<form onSubmit={handleSubmit(onSubmit)}>` でフォームをラップする
- [ ] `onSubmit(data)` 関数でコンソールに `data` を出力する
- [ ] フォームに入力して送信ボタンを押すと、コンソールに `{ username: '...' }` が表示される

### 画面イメージ

```
Lesson 01: Hello World

ユーザー名 [__________________]

[送信]

↓ ブラウザのコンソール（F12）
{ username: "田中" }
```

---

## ヒント

```tsx
// useForm から必要なものを取り出す
const { register, handleSubmit } = useForm()

// onSubmit 関数（data の中に全フィールドの値が入っている）
const onSubmit = (data) => {
  console.log(data)
}

// JSX の中で
<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register('username')} />
  <button type="submit">送信</button>
</form>
```

`{...register('username')}` は spread 構文。
`register` が返す `{ ref, name, onChange, onBlur }` を input の属性として一括で渡している。

---

## App.tsx への接続方法

```tsx
import HelloWorldLesson from './lessons/01-hello-world/HelloWorldLesson'
{ label: '01 Hello World', Component: HelloWorldLesson },
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
