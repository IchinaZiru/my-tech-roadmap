# Lesson 12: Component Patterns

## このレッスンで学ぶこと

### コンポーネントパターンとは

Lesson 01〜11 で学んだクラスを組み合わせて、**再利用できる UI コンポーネント**を作る。

TailwindCSS の強みは、ユーティリティクラスを組み合わせるだけで、ほぼすべてのUIが作れること。CSSファイルを一切書かずに実務で使えるクオリティのUIが完成する。

### このレッスンで作るもの

1. **ボタン**: primary / secondary / danger の3バリアント
2. **カード**: 画像 + タイトル + 説明 + ボタンの構成
3. **フォーム**: 入力欄 + ラベル + 送信ボタン

---

## 何を実装するか

`src/lessons/12-component-patterns/ComponentPatternsLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] ボタンコンポーネントを作る（primary / secondary / danger の3バリアント）
- [ ] カードコンポーネントを作る（画像プレースホルダー + タイトル + 説明 + ボタン）
- [ ] フォームを作る（入力欄 + ラベル + 送信ボタン）
- [ ] 上記3つをページに並べてレイアウトする
- [ ] `hover:` / `focus:` / `transition` も組み合わせる

### 画面イメージ

```
┌──────────────────────────────────────────────────────┐
│ Lesson 12: Component Patterns                        │
│                                                      │
│ ボタン                                               │
│ [  Primary  ]  [  Secondary  ]  [  Danger  ]        │
│                                                      │
│ カード                                               │
│ ┌───────────────────┐                               │
│ │  ████ 画像 ████  │                               │
│ │  タイトル         │                               │
│ │  説明テキスト...  │                               │
│ │  [ 詳しく見る ]  │                               │
│ └───────────────────┘                               │
│                                                      │
│ フォーム                                             │
│ 名前                                                 │
│ ┌──────────────────────────────────────┐            │
│ │                                      │            │
│ └──────────────────────────────────────┘            │
│ [  送信  ]                                           │
└──────────────────────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
// コメントを外す
import ComponentPatternsLesson from './lessons/12-component-patterns/ComponentPatternsLesson'

// Component: null を差し替える
{ label: '12 Component Patterns', Component: ComponentPatternsLesson },
```

---

## ヒント

### ボタンの典型的なクラス構成

```tsx
// primary ボタンの例（考え方を示すだけ。自分で書いてみる）
<button className="px-4 py-2 bg-{color}-{shade} text-white rounded-lg
  hover:bg-{color}-{darker} focus:outline-none focus:ring-2
  transition-colors duration-200">
  Primary
</button>
```

### カードの構造

```tsx
// カードの外枠
<div className="bg-white rounded-xl shadow-md overflow-hidden">
  {/* 画像エリア */}
  <div className="h-48 bg-gray-200">
    {/* 画像プレースホルダー */}
  </div>
  {/* テキストエリア */}
  <div className="p-6">
    <h3 className="...">タイトル</h3>
    <p className="...">説明</p>
    <button className="...">詳しく見る</button>
  </div>
</div>
```

### フォームのラベルと入力欄

```tsx
<div className="flex flex-col gap-1">
  <label className="text-sm font-medium text-gray-700">名前</label>
  <input
    type="text"
    className="border border-gray-300 rounded-lg px-3 py-2
      focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Tailwind でコンポーネントを作る際の考え方を書く -->

### 最小実装
```tsx
// 再利用できるボタンコンポーネントの最小コードを書く
```

### 実務での型
```tsx
// React コンポーネントとして props で variant を受け取るパターンを書く
```

### 落とし穴
<!-- className が長くなりすぎるときの対処法（clsx や cva の紹介など）-->

### 説明できる状態
<!-- なぜ Tailwind で className が長くなってもよいのかを説明できたら書く -->
