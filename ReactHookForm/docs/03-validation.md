# Lesson 03: validation（組み込みバリデーション）

## このレッスンで学ぶこと

`register` の第2引数にルールを書くだけでバリデーションが動く仕組み。
エラーの表示は Lesson 04 でやる。ここではルールの書き方だけを覚える。

### バリデーションルールの種類

| ルール | 説明 | 例 |
|--------|------|-----|
| `required` | 必須入力 | `required: '名前は必須です'` |
| `minLength` | 最小文字数 | `minLength: { value: 2, message: '2文字以上' }` |
| `maxLength` | 最大文字数 | `maxLength: { value: 20, message: '20文字以内' }` |
| `min` | 最小値（数値） | `min: { value: 0, message: '0以上' }` |
| `max` | 最大値（数値） | `max: { value: 120, message: '120以下' }` |
| `pattern` | 正規表現 | `pattern: { value: /^[a-z]+$/, message: '英小文字のみ' }` |

### ルールが満たされないと何が起きるか

`handleSubmit(onSubmit)` の中で自動的にバリデーションが走る。
エラーがあれば `onSubmit` は呼ばれない。エラーは `formState.errors` に入る（Lesson 04）。

---

## 何を実装するか

`src/lessons/03-validation/ValidationLesson.tsx` にバリデーションルール付きフォームを作る。

### 実装チェックリスト

- [ ] `username`: required, minLength 2, maxLength 20
- [ ] `email`: required, pattern でメール形式（`@` を含む）チェック
- [ ] `age`: required, min 0, max 120（`<input type="number">` を使う）
- [ ] 各フィールドの `register` 第2引数にルールを書く
- [ ] 送信ボタンを押して、バリデーションエラーのときに `onSubmit` が呼ばれないことをコンソールで確認する

### 画面イメージ

```
Lesson 03: validation

ユーザー名 [__________________]  ← 1文字だと送信できない
メール     [__________________]  ← @なしだと送信できない
年齢       [____]               ← 200と入力しても送信できない

[送信]
↓ バリデーションOKのときだけコンソールに表示
```

---

## ヒント

```tsx
// register の第2引数にルールオブジェクトを渡す
<input
  type="number"
  {...register('age', {
    required: '年齢は必須です',
    min: { value: 0, message: '0以上を入力してください' },
    max: { value: 120, message: '120以下を入力してください' },
    valueAsNumber: true,  // 文字列 → 数値に変換する
  })}
/>

// メールの pattern 例
pattern: {
  value: /\S+@\S+\.\S+/,
  message: '有効なメールアドレスを入力してください',
}
```

`valueAsNumber: true` を付けないと、数値フィールドの値が文字列として扱われる。

---

## App.tsx への接続方法

```tsx
import ValidationLesson from './lessons/03-validation/ValidationLesson'
{ label: '03 validation', Component: ValidationLesson },
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
