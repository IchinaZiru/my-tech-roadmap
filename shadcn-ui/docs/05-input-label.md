# Lesson 05: Input & Label

## このレッスンで学ぶこと

### Label と Input の関連付け（アクセシビリティ）

HTML の `<label>` と `<input>` は `htmlFor` / `id` で紐づける。

```tsx
<Label htmlFor="name">名前</Label>
<Input id="name" />
```

紐づけることで2つのメリットがある:
- ラベルをクリックしたとき、対応する Input にフォーカスが移る
- スクリーンリーダー（視覚障害者向けの読み上げソフト）が「この Input は何の入力欄か」を認識できる

shadcn/ui の Label は CSS の `peer` クラスと連携して、disabled 状態を自動でスタイリングできる。

### Input のスタイリング設計

shadcn/ui の Input は以下のようなクラスを持つ（簡略版）:

```ts
'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-2'
```

- `border-input` → CSS変数 `--color-input` の色でボーダーを表示
- `placeholder:text-muted-foreground` → placeholder のテキストを薄いグレーに
- `focus-visible:ring-2` → キーボードフォーカス時にリング表示（マウスクリック時は表示しない）

---

## 何を実装するか

`src/lessons/05-input-label/InputLabelLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] `Label` と `Input` を `htmlFor` / `id` で関連付ける
- [ ] テキスト・メール・パスワードの3種類の入力フォームを作る
- [ ] `placeholder` を設定する
- [ ] `Input` に入力した値を `useState` で管理してリアルタイム表示する

### 画面イメージ

```
┌──────────────────────────────────────┐
│ Lesson 05: Input & Label             │
│                                      │
│  名前                                │
│  ┌────────────────────────────────┐ │
│  │ 山田太郎と入力中...             │ │
│  └────────────────────────────────┘ │
│                                      │
│  メールアドレス                       │
│  ┌────────────────────────────────┐ │
│  │ example@example.com            │ │
│  └────────────────────────────────┘ │
│                                      │
│  パスワード                          │
│  ┌────────────────────────────────┐ │
│  │ ••••••••                       │ │
│  └────────────────────────────────┘ │
│                                      │
│  入力中: 山田太郎                    │
│                                      │
└──────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
import InputLabelLesson from './lessons/05-input-label/InputLabelLesson'

{ label: '05 Input & Label', Component: InputLabelLesson },
```

---

## ヒント

### Label + Input の組み合わせ

```tsx
<div className="space-y-2">
  <Label htmlFor="email">メールアドレス</Label>
  <Input id="email" type="email" placeholder="example@example.com" />
</div>
```

### 入力値を useState で管理する

```tsx
const [value, setValue] = useState('')

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### type の種類

```tsx
<Input type="text" />      // テキスト
<Input type="email" />     // メール（スマホでメールキーボード）
<Input type="password" />  // パスワード（文字を隠す）
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Label と Input の関連付けが重要な理由を1〜3行で書く -->

### 最小実装
```tsx
// Label + Input の最小構成を書く
```

### 実務での型
```tsx
// フォーム全体の構成パターンを書く（Label, Input, エラーメッセージ）
```

### 落とし穴
<!-- htmlFor と id を合わせないと何が起きるか -->

### 説明できる状態
<!-- アクセシビリティの観点で Label を使う理由を説明できるようになったら書く -->
