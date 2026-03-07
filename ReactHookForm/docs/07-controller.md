# Lesson 07: Controller（カスタムUIの統合）

## このレッスンで学ぶこと

`register` は DOM の `<input>` に直接 `ref` を付けることで動く。
しかし `<select>` や `<input type="checkbox">` は `value` の扱いが違うため、
`<Controller>` コンポーネントを使って統合する。

### register と Controller の違い

| 対象 | 使うもの | 理由 |
|------|---------|------|
| `<input type="text">` | `register` | ref で値が取れる |
| `<input type="number">` | `register` | ref で値が取れる |
| `<input type="checkbox">` | `Controller` | `checked` プロパティを使うため |
| `<select>` | `register` または `Controller` | 単純なら `register` でも動く |
| UI ライブラリのコンポーネント | `Controller` | 内部で `ref` が使えないことが多い |

### Controller の構造

```tsx
<Controller
  name="fieldName"     // フィールド名
  control={control}   // useForm から受け取った control
  render={({ field }) => (
    // field に { onChange, onBlur, value, ref } が入っている
    <input {...field} />
  )}
/>
```

---

## 何を実装するか

`src/lessons/07-controller/ControllerLesson.tsx` に Controller を使ったフォームを作る。

### 実装チェックリスト

- [ ] `useForm` から `control` を取り出す
- [ ] `username`（テキスト）は `register` で登録する
- [ ] `role`（select: frontend / backend / fullstack）は `<Controller>` で登録する
- [ ] `agreeToTerms`（checkbox: boolean）は `<Controller>` で登録する
- [ ] 送信時に `{ username, role, agreeToTerms }` が正しく取れる

### 画面イメージ

```
Lesson 07: Controller

ユーザー名  [__________________]
役割        [▼ フロントエンド  ]
            [ ] 利用規約に同意する

[送信]

↓ 送信後
{
  "username": "田中",
  "role": "frontend",
  "agreeToTerms": true
}
```

---

## ヒント

```tsx
// useForm から control を追加で取り出す
const { register, handleSubmit, control } = useForm<FormData>({
  defaultValues: { role: 'frontend', agreeToTerms: false },
})

// Controller で select を登録する
<Controller
  name="role"
  control={control}
  render={({ field }) => (
    <select {...field}>
      <option value="frontend">フロントエンド</option>
      <option value="backend">バックエンド</option>
      <option value="fullstack">フルスタック</option>
    </select>
  )}
/>

// Controller で checkbox を登録する（value ではなく checked を使う）
<Controller
  name="agreeToTerms"
  control={control}
  render={({ field }) => (
    <input
      type="checkbox"
      checked={field.value}
      onChange={field.onChange}
    />
  )}
/>
```

---

## App.tsx への接続方法

```tsx
import ControllerLesson from './lessons/07-controller/ControllerLesson'
{ label: '07 Controller', Component: ControllerLesson },
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
