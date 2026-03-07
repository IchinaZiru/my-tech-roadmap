# Lesson 06: defaultValues（デフォルト値とリセット）

## このレッスンで学ぶこと

フォームの初期値を設定する方法と、`reset` でフォームを元に戻す方法。
「プロフィール編集」のような「既存データをフォームに入れて編集する」UIは実務でよく使う。

### defaultValues の役割

`useForm({ defaultValues: {...} })` を使うと：
- フォームを開いたとき input に初期値が表示される
- `reset()` したときにこの値に戻る
- 初期値と現在値の比較（`isDirty`）が正しく動く

### reset の2つの使い方

```tsx
reset()          // defaultValues に戻す
reset(newValues) // 新しい値を defaultValues として設定しつつリセット
```

---

## 何を実装するか

`src/lessons/06-default-values/DefaultValuesLesson.tsx` にプロフィール編集フォームを作る。

### 実装チェックリスト

- [ ] `useForm({ defaultValues: existingProfile })` で既存データを初期値にする
- [ ] フォームを開いたとき input に `existingProfile` の値が入っている
- [ ] 「リセット」ボタンで `reset()` を呼び、フォームを初期値に戻す
- [ ] 「別のユーザーで上書き」ボタンで `reset(anotherProfile)` を呼ぶ
- [ ] 送信後に更新されたデータを画面に表示する

### 画面イメージ

```
Lesson 06: defaultValues — プロフィール編集

ユーザー名  [tanaka_taro_______]  ← 最初から入力済み
メール      [tanaka@example.com]
自己紹介    [フロントエンドエンジニアです。]

[保存] [リセット] [別のユーザーで上書き]

↓ 保存後
更新完了:
{ username: "tanaka_taro_new", ... }
```

---

## ヒント

```tsx
const existingProfile = {
  username: 'tanaka_taro',
  email: 'tanaka@example.com',
  bio: 'フロントエンドエンジニアです。',
}

const { register, handleSubmit, reset } = useForm({
  defaultValues: existingProfile,
})

// ボタンで reset を呼ぶ（type="button" を付けて送信を防ぐ）
<button type="button" onClick={() => reset()}>
  リセット
</button>

// 別の値にリセット
<button type="button" onClick={() => reset(anotherProfile)}>
  別のユーザーで上書き
</button>
```

`type="button"` を付けないと `<form>` の中の button は `type="submit"` として扱われ、
クリックしたとき onSubmit が発火してしまう。

---

## App.tsx への接続方法

```tsx
import DefaultValuesLesson from './lessons/06-default-values/DefaultValuesLesson'
{ label: '06 defaultValues', Component: DefaultValuesLesson },
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
