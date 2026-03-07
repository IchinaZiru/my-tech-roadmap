# Lesson 02: register

## このレッスンで学ぶこと

`register` が何をしているかを理解する。複数フィールドを登録して、TypeScript の型を使ってフォームを型安全にする。

### register が返すもの

`register('fieldName')` は以下のオブジェクトを返す。

```tsx
{
  name: 'fieldName',      // input の name 属性
  ref: ...,               // DOM 要素への参照（RHF が内部で使う）
  onChange: ...,          // 値が変わったときのハンドラ
  onBlur: ...,            // フォーカスが外れたときのハンドラ
}
```

`{...register('fieldName')}` はこれを input に丸ごと渡している。
だから `useState` を書かなくても RHF が値を管理できる。

### TypeScript で型を付ける

`useForm<FormData>()` のように型パラメータを渡すと、`register` の第1引数がフィールド名に限定される。

```tsx
type FormData = { username: string; email: string }
const { register } = useForm<FormData>()
register('username')  // OK
register('typo')      // TypeScript エラー！
```

---

## 何を実装するか

`src/lessons/02-register/RegisterLesson.tsx` に3フィールドのフォームを作る。

### 実装チェックリスト

- [ ] `FormData` 型（`username`, `email`, `message`）を定義する
- [ ] `useForm<FormData>()` で型パラメータを渡す
- [ ] `username`（テキスト）、`email`（メール）、`message`（テキストエリア）を `register` で登録する
- [ ] 送信後に入力データを画面に `JSON.stringify(data, null, 2)` で表示する
- [ ] コンソールで `register('username')` の返り値を確認する

### 画面イメージ

```
Lesson 02: register

ユーザー名 [__________________]
メール     [__________________]
メッセージ [                  ]
           [                  ]

[送信]

↓ 送信後
{
  "username": "田中",
  "email": "tanaka@example.com",
  "message": "こんにちは"
}
```

---

## ヒント

```tsx
// type を定義して useForm に渡す
type FormData = {
  username: string
  email: string
  message: string
}
const { register, handleSubmit } = useForm<FormData>()

// textarea も register で登録できる
<textarea {...register('message')} />

// 送信データを画面に表示する
<pre>{JSON.stringify(data, null, 2)}</pre>
```

`<pre>` タグは改行やスペースをそのまま表示するタグ。
`JSON.stringify(data, null, 2)` は JSON を読みやすく整形する。

---

## App.tsx への接続方法

```tsx
import RegisterLesson from './lessons/02-register/RegisterLesson'
{ label: '02 register', Component: RegisterLesson },
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
