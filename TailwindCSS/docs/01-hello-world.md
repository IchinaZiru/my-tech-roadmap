# Lesson 01: Hello World

## このレッスンで学ぶこと

### TailwindCSS の「ユーティリティファースト」とは

従来の CSS は「クラスに名前をつけて、そのクラスにスタイルを書く」。

```css
/* 従来のCSS */
.title { font-size: 1.5rem; font-weight: bold; color: #3b82f6; }
```

TailwindCSS は逆で、**あらかじめ用意されたクラスを HTML に直接貼り付ける**。

```tsx
/* Tailwind */
<h1 className="text-2xl font-bold text-blue-500">Hello</h1>
```

クラス名を考えなくていい。CSSファイルを開かなくていい。ここに書いてある通りのスタイルがそのままかかる。

### なぜそう書くのか

- `text-blue-500` → テキストが青色（blue の 500番の濃さ）
- `text-2xl` → テキストサイズが 1.5rem（24px）
- `font-bold` → 太字

「クラス名 = スタイルの内容」になっているので、見ただけでどんな見た目かわかる。

---

## 何を実装するか

`src/lessons/01-hello-world/HelloWorldLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] テキストに色をつける（`text-{color}-{shade}`）
- [ ] テキストサイズを大きくする（`text-xl`, `text-3xl` など）
- [ ] テキストを太字にする（`font-bold`）
- [ ] 背景色をつける（`bg-{color}-{shade}`）
- [ ] インラインスタイルとクラスの違いを体感する

### 画面イメージ

```
┌─────────────────────────────────┐
│ Lesson 01: Hello World          │
│                                 │
│  こんにちは、TailwindCSS！      │  ← 大きく青いテキスト
│                                 │
│  ┌──────────────────────────┐  │
│  │  背景色がついたボックス   │  │  ← bg-sky-100 など
│  └──────────────────────────┘  │
│                                 │
│  太字のテキスト                 │  ← font-bold
└─────────────────────────────────┘
```

---

## App.tsx への接続方法

実装後、`src/App.tsx` を以下のように変更する。

```tsx
// コメントを外す
import HelloWorldLesson from './lessons/01-hello-world/HelloWorldLesson'

// Component: null を差し替える
{ label: '01 Hello World', Component: HelloWorldLesson },
```

---

## ヒント

### カラー名とシェードの考え方

Tailwind のカラーは `{色名}-{濃さ}` の形式。濃さは `50`（薄い）〜 `950`（濃い）。

```
text-blue-200  → 薄い青のテキスト
text-blue-500  → 標準的な青のテキスト
text-blue-900  → 濃い青のテキスト
bg-red-100     → 薄い赤の背景
```

### テキストサイズの一覧

```
text-xs    → 0.75rem (12px)
text-sm    → 0.875rem (14px)
text-base  → 1rem (16px) ← ブラウザデフォルトと同じ
text-lg    → 1.125rem (18px)
text-xl    → 1.25rem (20px)
text-2xl   → 1.5rem (24px)
text-3xl   → 1.875rem (30px)
text-4xl   → 2.25rem (36px)
```

### インラインスタイルとの比較（考えてみよう）

```tsx
// インラインスタイル
<p style={{ color: '#3b82f6', fontSize: '1.5rem', fontWeight: 'bold' }}>Hello</p>

// Tailwind
<p className="text-blue-500 text-2xl font-bold">Hello</p>
```

どちらが読みやすいか、どちらが書きやすいか考えてみる。

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- TailwindCSSとは何か、1〜3行で書く -->

### 最小実装
```tsx
// 最もシンプルなTailwindクラスの使い方を書く
```

### 実務での型
```tsx
// よく使うクラスの組み合わせパターンを書く
```

### 落とし穴
<!-- よくあるミスと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
