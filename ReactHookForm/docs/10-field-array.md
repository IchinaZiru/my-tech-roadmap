# Lesson 10: useFieldArray（動的フォーム）

## このレッスンで学ぶこと

フィールドを動的に追加・削除する「動的フォーム」パターン。
「スキルを追加する」「連絡先を追加する」のような実務でよく出るUIを作る。

### useFieldArray とは

配列形式のフォームフィールドを管理するための RHF のフック。
通常の `register` では「固定したフィールド」しか扱えないが、
`useFieldArray` を使うと「可変の配列フィールド」を管理できる。

### 基本的な使い方

```tsx
const { fields, append, remove } = useFieldArray({
  control,
  name: 'skills',  // FormData の中の配列フィールド名
})
```

| メソッド | 役割 |
|---------|------|
| `fields` | 現在のフィールド一覧（`map` でレンダリングする）|
| `append(value)` | 末尾にフィールドを追加する |
| `remove(index)` | 指定した index のフィールドを削除する |

### register の書き方

配列フィールドは ``register(`skills.${index}.name`)`` のように書く。

---

## 何を実装するか

`src/lessons/10-field-array/FieldArrayLesson.tsx` に動的フォームを作る。

### 実装チェックリスト

- [ ] `useFieldArray({ control, name: 'skills' })` を呼び出す
- [ ] `fields.map((field, index) => ...)` でスキル入力欄をレンダリングする
- [ ] 各スキル入力欄には ``register(`skills.${index}.name`)`` を使う
- [ ] 「スキルを追加」ボタンで `append({ name: '' })` する
- [ ] 「削除」ボタンで `remove(index)` する
- [ ] 初期状態では空のスキル欄が1つある
- [ ] 送信後にスキル一覧を表示する

### 画面イメージ

```
Lesson 10: useFieldArray

プロジェクト名  [__________________]

スキル一覧:
  [React____________] [削除]
  [TypeScript_______] [削除]
  [___________________] [削除]

[+ スキルを追加]

[送信]

↓ 送信後
{
  "projectName": "ポートフォリオ",
  "skills": [
    { "name": "React" },
    { "name": "TypeScript" }
  ]
}
```

---

## ヒント

```tsx
const { register, handleSubmit, control } = useForm<FormData>({
  defaultValues: {
    projectName: '',
    skills: [{ name: '' }],  // 初期状態で1つ空のスキル欄
  },
})

const { fields, append, remove } = useFieldArray({
  control,
  name: 'skills',
})

// レンダリング（field.id をキーに使う！index は使わない）
{fields.map((field, index) => (
  <div key={field.id}>
    <input {...register(`skills.${index}.name`)} />
    <button type="button" onClick={() => remove(index)}>削除</button>
  </div>
))}

// 追加ボタン
<button type="button" onClick={() => append({ name: '' })}>
  + スキルを追加
</button>
```

`key={field.id}` と書く。`key={index}` は NG。
削除・並べ替えで index が変わると React が DOM を誤って再利用するため。

---

## App.tsx への接続方法

```tsx
import FieldArrayLesson from './lessons/10-field-array/FieldArrayLesson'
{ label: '10 useFieldArray', Component: FieldArrayLesson },
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
