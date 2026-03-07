# Lesson 03: Button Variants

## このレッスンで学ぶこと

### CVA（class-variance-authority）とは何か

`cva` は「バリアント（見た目のパターン）を型安全に管理するライブラリ」。

shadcn/ui の Button はこう定義されている（簡略版）:

```ts
const buttonVariants = cva(
  // ベースクラス（全バリアント共通のスタイル）
  'inline-flex items-center rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default:     'bg-primary text-primary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline:     'border border-input bg-background',
        secondary:   'bg-secondary text-secondary-foreground',
        ghost:       'hover:bg-accent',
        link:        'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm:      'h-9 px-3',
        lg:      'h-11 px-8',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)
```

使い方:
```ts
buttonVariants({ variant: 'outline', size: 'sm' })
// → "inline-flex items-center ... border border-input bg-background h-9 px-3"
```

### なぜ cva を使うのか

- `if/switch` でクラスを切り替えるより読みやすい
- TypeScript で `variant` の値を補完・型チェックできる
- ベースクラスとバリアントを明確に分離できる

---

## 何を実装するか

`src/lessons/03-button-variants/ButtonVariantsLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] `variant` の全種類（default, destructive, outline, secondary, ghost, link）を表示する
- [ ] `size` の全種類（sm, default, lg）を表示する
- [ ] `disabled` 状態のボタンを表示する
- [ ] `src/components/ui/button.tsx` の `cva()` を読んで、バリアントの構造を理解する

### 画面イメージ

```
┌──────────────────────────────────────────────────────┐
│ Lesson 03: Button Variants                           │
│                                                      │
│ variant                                              │
│  [Default] [Destructive] [Outline] [Secondary]      │
│  [Ghost]  [Link]                                     │
│                                                      │
│ size                                                 │
│  [Small]  [Default]  [Large Button]                 │
│                                                      │
│ disabled                                             │
│  [Disabled Button]  ← グレーアウトされている          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
import ButtonVariantsLesson from './lessons/03-button-variants/ButtonVariantsLesson'

{ label: '03 Button Variants', Component: ButtonVariantsLesson },
```

---

## ヒント

### variant と size の指定方法

```tsx
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### disabled の指定

```tsx
<Button disabled>Disabled</Button>
```

### バリアントを組み合わせる

```tsx
<Button variant="outline" size="sm">Small Outline</Button>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- cva とは何か、1〜3行で書く -->
cvaはCSS要素を複数管理して使いやすくするためのライブラリ
### 最小実装
```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

### 実務での型
```tsx
<Button variant="destructive">Destructive</Button>
```

### 落とし穴
<!-- variant を間違えたときどうなるか / TypeScript がどう守ってくれるか -->

### 説明できる状態
<!-- cva の必要性を口頭で説明できるようになったら書く -->
