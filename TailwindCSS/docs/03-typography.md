# Lesson 03: Typography

## このレッスンで学ぶこと

### タイポグラフィとは

テキストの見た目を整えるクラス群。「フォントサイズ」「太さ」「整列」「行間」など。

### なぜ Tailwind を使うと便利か

通常の CSS では `font-size: 1.5rem; font-weight: 700; text-align: center;` と3行書く。
Tailwind では `text-2xl font-bold text-center` の1行で同じことができる。

---

## 何を実装するか

`src/lessons/03-typography/TypographyLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] テキストサイズを変える（`text-sm` / `text-base` / `text-lg` / `text-xl` / `text-2xl` / `text-4xl`）
- [ ] フォントウェイトを変える（`font-thin` / `font-normal` / `font-medium` / `font-semibold` / `font-bold`）
- [ ] テキスト整列を変える（`text-left` / `text-center` / `text-right`）
- [ ] 行間を変える（`leading-tight` / `leading-normal` / `leading-loose`）
- [ ] 文字間隔を変える（`tracking-tight` / `tracking-normal` / `tracking-wide`）

### 画面イメージ

```
┌──────────────────────────────────────────┐
│ Lesson 03: Typography                    │
│                                          │
│ text-4xl font-bold                       │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ とても大きな見出し                       │  ← text-4xl + font-bold
│                                          │
│ text-xl font-semibold                    │
│ ─────────────────────────────────────── │
│ 中くらいの見出し                         │  ← text-xl + font-semibold
│                                          │
│ text-base font-normal（本文のテキスト）  │  ← デフォルトサイズ
│                                          │
│              中央揃えのテキスト          │  ← text-center
└──────────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
// コメントを外す
import TypographyLesson from './lessons/03-typography/TypographyLesson'

// Component: null を差し替える
{ label: '03 Typography', Component: TypographyLesson },
```

---

## ヒント

### フォントサイズの対応表

```
text-xs    → 12px  （注釈、キャプション）
text-sm    → 14px  （小さい補足テキスト）
text-base  → 16px  （本文。ブラウザデフォルトと同じ）
text-lg    → 18px  （少し大きい本文）
text-xl    → 20px  （小見出し）
text-2xl   → 24px  （見出し）
text-3xl   → 30px  （大見出し）
text-4xl   → 36px  （ヒーローテキスト）
```

### フォントウェイトの対応表

```
font-thin       → 100
font-extralight → 200
font-light      → 300
font-normal     → 400  ← デフォルト
font-medium     → 500
font-semibold   → 600
font-bold       → 700  ← よく使う
font-extrabold  → 800
font-black      → 900
```

### 行間（leading）の使い分け

```tsx
// leading-tight: 行間が狭い。見出しに使いやすい
<p className="leading-tight">見出しテキスト</p>

// leading-loose: 行間が広い。長文の本文に使いやすい
<p className="leading-loose">長い本文テキスト...</p>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- タイポグラフィで使う主なクラスを列挙する -->

### 最小実装
```tsx
// ページタイトルとして使えるテキストの最小実装を書く
```

### 実務での型
```tsx
// h1/h2/h3 のようなセクション見出しのパターンを書く
```

### 落とし穴
<!-- フォントファミリーを指定していないとブラウザデフォルトになる点など -->

### 説明できる状態
<!-- text-xl font-bold と書いたとき何pxで何の太さになるか即答できたら書く -->
