# Lesson 05: Flexbox

## このレッスンで学ぶこと

### Flexbox とは

複数の要素を「横並び」や「縦並び」に整列させる仕組み。`flex` クラスをつけた要素が「フレックスコンテナ」になり、その直接の子要素が「フレックスアイテム」になる。

### 2つの軸の考え方

Flexbox には「主軸（main axis）」と「交差軸（cross axis）」の2本の軸がある。

- `flex-row`（デフォルト）: 主軸 = 横方向、交差軸 = 縦方向
- `flex-col`: 主軸 = 縦方向、交差軸 = 横方向

```
flex-row の場合:
  → → → → （主軸）
  ↕         （交差軸）
```

### なぜ Flexbox を使うのか

`float` や `inline-block` を使わずに、要素を簡単に横並び・中央揃えにできる。現代の CSS レイアウトの基本。

---

## 何を実装するか

`src/lessons/05-flexbox/FlexboxLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] `flex` コンテナを作る
- [ ] 方向を指定する（`flex-row` / `flex-col`）
- [ ] 交差軸の揃えを指定する（`items-start` / `items-center` / `items-end`）
- [ ] 主軸の配置を指定する（`justify-start` / `justify-center` / `justify-between` / `justify-around`）
- [ ] 折り返しを指定する（`flex-wrap`）
- [ ] 子要素の伸縮を指定する（`flex-1` / `flex-none`）

### 画面イメージ

```
┌──────────────────────────────────────────────┐
│ justify-between:                             │
│ ┌────────┐            ┌────────┐            │
│ │ 左端   │            │ 右端   │            │
│ └────────┘            └────────┘            │
│                                              │
│ justify-center:                              │
│          ┌────────┐┌────────┐               │
│          │  中央  ││  中央  │               │
│          └────────┘└────────┘               │
│                                              │
│ items-center（高さが違う要素を縦中央に）:   │
│   ┌──┐   ┌────┐   ┌──────┐                 │
│   │  │   │    │   │      │                 │
│   └──┘   └────┘   └──────┘                 │
└──────────────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
// コメントを外す
import FlexboxLesson from './lessons/05-flexbox/FlexboxLesson'

// Component: null を差し替える
{ label: '05 Flexbox', Component: FlexboxLesson },
```

---

## ヒント

### よく使う組み合わせ

```tsx
// 横に並べて上下左右中央に置く
<div className="flex items-center justify-center">
  <div>中央</div>
</div>

// 横に並べて両端に置く
<div className="flex justify-between">
  <div>左</div>
  <div>右</div>
</div>

// 縦に並べる
<div className="flex flex-col gap-4">
  <div>1番目</div>
  <div>2番目</div>
</div>
```

### gap でアイテム間のスペースを指定する

```tsx
// gap-4 でアイテム間に 16px のスペース
<div className="flex gap-4">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

### flex-1 で残りのスペースを埋める

```tsx
<div className="flex">
  <div className="w-32">固定幅サイドバー</div>
  <div className="flex-1">残りを全部使うメインコンテンツ</div>
</div>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- 主軸と交差軸を自分の言葉で説明する -->

### 最小実装
```tsx
// 3つの要素を横並びにして中央揃えにする最小コードを書く
```

### 実務での型
```tsx
// ナビゲーションバー（左にロゴ、右にメニュー）のパターンを書く
```

### 落とし穴
<!-- items-center が効かない → コンテナに高さが必要、など -->

### 説明できる状態
<!-- justify-between と justify-around の違いを即答できたら書く -->
