# Lesson 08: Badge & Alert

## このレッスンで学ぶこと

### shadcn/ui のパターンを総整理する

このレッスンでは新しい概念を学ぶというより、これまで学んだパターンが Badge と Alert にも適用されていることを確認する。

**Badge** — `cva` でバリアントを管理（Lesson 03 と同じパターン）。
**Alert** — `cva` でバリアントを管理 + `forwardRef` でコンポーネントを実装。

### shadcn/ui を見分けるポイント

他のプロジェクトで shadcn/ui を使っているかどうかを見分けるには:

1. `src/components/ui/` フォルダが存在する
2. `src/lib/utils.ts` に `cn()` 関数がある
3. コンポーネントが `cva` と `cn()` を使っている
4. `@radix-ui/react-*` が `package.json` にある
5. `components.json` がルートに存在する

---

## 何を実装するか

`src/lessons/08-badge-alert/BadgeAlertLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] `Badge` の全バリアント（default, secondary, destructive, outline）を表示する
- [ ] `Alert` の `default` / `destructive` バリアントを表示する
- [ ] `Alert` に `AlertTitle` と `AlertDescription` を組み合わせる
- [ ] Badge を `Card` の中で使う（ステータスラベル付きカード）

### 画面イメージ

```
┌─────────────────────────────────────────────────────┐
│ Lesson 08: Badge & Alert                            │
│                                                     │
│ Badge                                               │
│  [Default] [Secondary] [Destructive] [Outline]     │
│                                                     │
│ Alert                                               │
│  ┌─────────────────────────────────────────────┐   │
│  │ ℹ️ 情報                                     │   │
│  │ これは情報アラートです。                     │   │
│  └─────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────┐   │
│  │ ⚠️ エラー                                   │   │  ← destructive
│  │ 操作に失敗しました。                         │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│ Badge in Card                                       │
│  ┌──────────────────────┐                          │
│  │ タスク管理アプリ      │                          │
│  │            [進行中]  │  ← Badge                 │
│  │ 期限: 2025/03/31     │                          │
│  └──────────────────────┘                          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
import BadgeAlertLesson from './lessons/08-badge-alert/BadgeAlertLesson'

{ label: '08 Badge & Alert', Component: BadgeAlertLesson },
```

---

## ヒント

### Badge の全バリアント

```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

### Alert の基本構造

```tsx
<Alert>
  <AlertTitle>タイトル</AlertTitle>
  <AlertDescription>説明文</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>エラー</AlertTitle>
  <AlertDescription>操作に失敗しました。</AlertDescription>
</Alert>
```

### Badge と Card を組み合わせる

```tsx
<Card>
  <CardHeader className="flex flex-row items-center justify-between">
    <CardTitle>タスク名</CardTitle>
    <Badge variant="secondary">進行中</Badge>
  </CardHeader>
  <CardContent>
    {/* 内容 */}
  </CardContent>
</Card>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Badge と Alert に共通する shadcn/ui パターンを1〜3行で書く -->

### shadcn/ui を見分けるチェックリスト
<!-- 他のプロジェクトで shadcn/ui を使っているか確認する方法を書く -->

### 最小実装
```tsx
// Badge の最もシンプルな使い方を書く
```

### 実務での型
```tsx
// フォームバリデーションエラーに Alert を使うパターンを書く
```

### 落とし穴
<!-- Badge は div 要素なので button などの interactive な要素が必要な場合の対処法 -->

### 説明できる状態
<!-- shadcn/ui の全体像（Radix + Tailwind + cva + cn）を口頭で説明できるようになったら書く -->
