# Lesson 08: Zod（スキーマバリデーション）

## このレッスンで学ぶこと

Zod でバリデーションスキーマを定義して、TypeScript の型を自動生成する。
RHF の組み込みバリデーション（register の第2引数）をスキーマで置き換えることで、
バリデーションロジックを一か所にまとめられる。

### Zod とは

バリデーションとTypeScript型定義を同時に書けるライブラリ。

```tsx
// スキーマを定義すると...
const schema = z.object({
  username: z.string().min(2, '2文字以上'),
  email: z.string().email('有効なメールアドレスを入力してください'),
})

// TypeScript の型を自動生成できる（手で書かなくていい）
type FormData = z.infer<typeof schema>
// → { username: string; email: string }
```

### zodResolver でつなぐ

```tsx
import { zodResolver } from '@hookform/resolvers/zod'

const { register } = useForm<FormData>({
  resolver: zodResolver(schema),
})
```

`resolver` を渡すと、`register` の第2引数（バリデーションルール）は不要になる。
スキーマがバリデーションの唯一の情報源になる。

### .refine() で複数フィールドの連携チェック

```tsx
.refine(
  (data) => data.password === data.confirmPassword,
  { message: 'パスワードが一致しません', path: ['confirmPassword'] }
)
```

`path` でどのフィールドにエラーを紐付けるかを指定する。

---

## 何を実装するか

`src/lessons/08-zod/ZodLesson.tsx` に Zod スキーマ付きフォームを作る。

### 実装チェックリスト

- [ ] `z.object()` でスキーマを定義する
- [ ] `z.infer<typeof schema>` で型を生成する（手書き不要）
- [ ] `useForm({ resolver: zodResolver(schema) })` を設定する
- [ ] `.refine()` でパスワード一致チェックを実装する
- [ ] エラーメッセージを各フィールドの下に表示する

### 画面イメージ

```
Lesson 08: Zod

ユーザー名  [a_________________]
           ⚠ 2文字以上で入力してください

メール      [test______________]
           ⚠ 有効なメールアドレスを入力してください

パスワード  [••••••____________]
確認        [•••_______________]
           ⚠ パスワードが一致しません

[送信]
```

---

## ヒント

```tsx
const schema = z.object({
  username: z.string().min(2, '2文字以上で入力してください').max(20, '20文字以内で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  password: z.string().min(8, '8文字以上で入力してください'),
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  { message: 'パスワードが一致しません', path: ['confirmPassword'] }
)

type FormData = z.infer<typeof schema>

const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema),
})
```

Zod のエラーは `errors.confirmPassword?.message` のように取り出せる。
RHF の組み込みバリデーションと同じ `formState.errors` に入る。

---

## App.tsx への接続方法

```tsx
import ZodLesson from './lessons/08-zod/ZodLesson'
{ label: '08 Zod', Component: ZodLesson },
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
