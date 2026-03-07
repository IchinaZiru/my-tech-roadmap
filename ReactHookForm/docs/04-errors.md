# Lesson 04: errors（エラーメッセージの表示）

## このレッスンで学ぶこと

`formState.errors` を使ってバリデーションエラーを画面に表示する。
これで「入力が間違っているときに赤いメッセージを出す」UIが完成する。

### formState.errors の構造

```tsx
// バリデーションエラーがあるとき
errors = {
  username: {
    type: 'required',
    message: '名前は必須です',
  },
  email: {
    type: 'pattern',
    message: '有効なメールアドレスを入力してください',
  }
}

// エラーがないとき
errors = {}
```

エラーメッセージは `errors.username?.message` で取り出す。
`?.` （オプショナルチェーン）は、`errors.username` が undefined のときに `undefined` を返して、エラーにならないようにするための記法。

### mode オプション

デフォルトでは `submit` 時にバリデーションが走る。
`useForm({ mode: 'onChange' })` にすると入力ごとに走る。

| mode | バリデーションのタイミング |
|------|--------------------------|
| `'onSubmit'`（デフォルト） | 送信ボタンを押したとき |
| `'onChange'` | キーを押すたび |
| `'onBlur'` | フォーカスが外れたとき |
| `'onTouched'` | 最初にフォーカスが外れた後から onChange |

---

## 何を実装するか

`src/lessons/04-errors/ErrorsLesson.tsx` にエラーメッセージ付きフォームを作る。

### 実装チェックリスト

- [ ] `useForm()` から `formState: { errors }` を取り出す
- [ ] `username` のエラーメッセージを input の下に赤文字で表示する
- [ ] `email` のエラーメッセージを input の下に赤文字で表示する
- [ ] `age` のエラーメッセージを input の下に赤文字で表示する
- [ ] 全フィールドが正しいときだけ送信データを画面に表示する

### 画面イメージ

```
Lesson 04: errors

ユーザー名 [_]
           ⚠ 2文字以上で入力してください

メール     [test]
           ⚠ 有効なメールアドレスを入力してください

年齢       [200]
           ⚠ 120以下を入力してください

[送信]
```

---

## ヒント

```tsx
// useForm から errors を取り出す（分割代入の中に分割代入）
const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

// エラーメッセージの表示
{errors.username && (
  <p style={{ color: 'red', fontSize: '0.8rem' }}>
    {errors.username.message}
  </p>
)}

// または、オプショナルチェーンで短く書く
<p style={{ color: 'red' }}>{errors.username?.message}</p>
```

`errors.username?.message` は、`errors.username` が存在するときだけ `message` を読む。
存在しないときは `undefined` になり、JSX では何も表示されない。

---

## App.tsx への接続方法

```tsx
import ErrorsLesson from './lessons/04-errors/ErrorsLesson'
{ label: '04 errors', Component: ErrorsLesson },
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
