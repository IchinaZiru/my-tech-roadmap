# Lesson 04: Card

## このレッスンで学ぶこと

### コンポーネント合成パターン（Compound Component）とは

shadcn/ui の Card は複数の小コンポーネントを組み合わせて使う設計になっている。

```tsx
<Card>
  <CardHeader>
    <CardTitle>タイトル</CardTitle>
    <CardDescription>説明文</CardDescription>
  </CardHeader>
  <CardContent>
    <p>本文コンテンツ</p>
  </CardContent>
  <CardFooter>
    <Button>アクション</Button>
  </CardFooter>
</Card>
```

これを「合成コンポーネント（Compound Component）」と呼ぶ。
1つの大きなコンポーネントに全部詰め込む代わりに、**役割ごとに小さく分けて、好きに組み合わせる**。

### なぜ分割されているのか

- `CardHeader` だけ使いたい場合、`CardFooter` は省略できる
- `CardContent` の中に何を入れるかは自由
- 各パーツのスタイルが独立しているので上書きしやすい

---

## 何を実装するか

`src/lessons/04-card/CardLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] `Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter` を使ったカードを作る
- [ ] ユーザープロフィールカード（名前・説明・ボタン）を作る
- [ ] 複数のカードを横並びで表示する（Tailwind の flex / grid を使う）
- [ ] `src/components/ui/card.tsx` を読んで、合成コンポーネントの構造を理解する

### 画面イメージ

```
┌────────────────────────────────────────────────────┐
│ Lesson 04: Card                                    │
│                                                    │
│  ┌──────────────────┐  ┌──────────────────┐      │
│  │ 田中 太郎         │  │ 鈴木 花子         │      │
│  │ フロントエンド    │  │ バックエンド      │      │
│  │ エンジニア        │  │ エンジニア        │      │
│  │ ──────────────  │  │ ──────────────  │      │
│  │ React と         │  │ Node.js と       │      │
│  │ TypeScript が    │  │ Go が得意        │      │
│  │ 得意です         │  │                  │      │
│  │ ──────────────  │  │ ──────────────  │      │
│  │ [プロフィール]   │  │ [プロフィール]   │      │
│  └──────────────────┘  └──────────────────┘      │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
import CardLesson from './lessons/04-card/CardLesson'

{ label: '04 Card', Component: CardLesson },
```

---

## ヒント

### Card の基本構造

```tsx
<Card>
  <CardHeader>
    <CardTitle>タイトル</CardTitle>
    <CardDescription>サブタイトル</CardDescription>
  </CardHeader>
  <CardContent>
    {/* メインコンテンツ */}
  </CardContent>
  <CardFooter>
    {/* ボタンなど */}
  </CardFooter>
</Card>
```

### 複数カードを横並びにする

```tsx
<div className="flex gap-4">
  <Card>...</Card>
  <Card>...</Card>
</div>
```

### Card の幅を指定する

```tsx
<Card className="w-64">...</Card>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Compound Component パターンとは何か、1〜3行で書く -->

### 最小実装
```tsx
// 最もシンプルな Card の使い方を書く
```

### 実務での型
```tsx
// 実際のアプリでよく使う Card パターンを書く（商品カード、ユーザーカードなど）
```

### 落とし穴
<!-- CardContent の中の pt-0 の意味など -->

### 説明できる状態
<!-- Compound Component パターンの利点を説明できるようになったら書く -->
