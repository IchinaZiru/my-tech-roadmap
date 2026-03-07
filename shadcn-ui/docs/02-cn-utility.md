# Lesson 02: cn() ユーティリティ

## このレッスンで学ぶこと

### cn() とは何か

shadcn/ui の全コンポーネントで使われているユーティリティ関数。

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

2つのライブラリを組み合わせている:

**clsx** — 複数のクラスを結合し、条件付きクラスを扱える。

```ts
clsx('px-4', 'py-2', isActive && 'bg-blue-500')
// → "px-4 py-2 bg-blue-500"（isActive が true の場合）
```

**tailwind-merge** — Tailwind クラスの衝突を解消する。

```ts
twMerge('px-4 px-8')
// → "px-8"（後から指定した px-8 が優先される）
```

### なぜこの2つが必要なのか

Tailwind は `px-4 px-8` のように同じプロパティのクラスが重複しても、どちらが優先されるか CSS の読み込み順に依存してしまう。
`twMerge` を使うと「後に指定した方が勝つ」というルールで正しく解決できる。

コンポーネントの利用者が `className` で上書きできる設計にするためには、この仕組みが不可欠。

---

## 何を実装するか

`src/lessons/02-cn-utility/CnUtilityLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] `cn()` 関数をインポートして使ってみる
- [ ] 複数のクラスを結合する例を作る（ボックスに複数クラスを適用）
- [ ] 条件付きクラスを切り替える例を作る（ボタンで `isActive` を切り替え）
- [ ] `src/lib/utils.ts` を開いて `cn()` の中身を確認する

### 画面イメージ

```
┌──────────────────────────────────────────┐
│ Lesson 02: cn() ユーティリティ           │
│                                          │
│  ┌──────────────────────────────────┐   │
│  │  複数クラスが適用されたボックス   │   │  ← cn() で複数クラスを結合
│  └──────────────────────────────────┘   │
│                                          │
│  ┌─────────────────┐                   │
│  │  アクティブ！    │  ← isActive=true  │  ← 青背景
│  └─────────────────┘                   │
│  ┌─────────────────┐                   │
│  │  非アクティブ    │  ← isActive=false │  ← グレー背景
│  └─────────────────┘                   │
│                                          │
│  [ 切り替え ]                           │
└──────────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
import CnUtilityLesson from './lessons/02-cn-utility/CnUtilityLesson'

{ label: '02 cn() ユーティリティ', Component: CnUtilityLesson },
```

---

## ヒント

### cn() の基本パターン

```ts
// 複数クラスを結合
cn('rounded-md', 'border', 'p-4')
// → "rounded-md border p-4"

// 条件付きクラス
cn('px-4 py-2', isActive && 'bg-blue-500 text-white')
// isActive=true  → "px-4 py-2 bg-blue-500 text-white"
// isActive=false → "px-4 py-2"

// 外から className を受け取って上書き許可
cn('px-4 py-2 text-sm', className)
```

### tailwind-merge が解決する問題

```ts
// twMerge なし（どちらが効くか不明）
'px-4 px-8'

// twMerge あり（後に書いた方が勝つ）
twMerge('px-4 px-8')  // → "px-8"
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- cn() が何をしているか、1〜3行で書く -->
`cn`は複数のCSS要素が重なった時に重複エラーを起こさないようにできる
### 最小実装
```ts
<div className={cn('px-4 py-2', isActive && 'bg-blue-500 text-white')}>
        例2: 条件付きクラスを切り替える
      </div>
```

### 実務での型
```ts
// コンポーネントで className を受け取って cn() で結合するパターンを書く
```

### 落とし穴
<!-- clsx だけ・twMerge だけでは不十分な理由を書く -->

### 説明できる状態
<!-- cn() の必要性を口頭で説明できるようになったら書く -->
cnを使うとCSSの要素結合ができるため、JavaScriptなどの条件分岐と組み合わせると可読性の高いコードを書くことができる
`cnを使用しなくても同等の処理は書けるが、複雑になると読みにくい`
