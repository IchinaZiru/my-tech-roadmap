# Lesson 06: Dialog

## このレッスンで学ぶこと

### Radix UI プリミティブとは何か

shadcn/ui の Dialog は内部で `@radix-ui/react-dialog` を使っている。

Radix UI は「見た目のないアクセシブルなコンポーネント群」。
キーボード操作・フォーカストラップ・スクリーンリーダー対応など、アクセシビリティのための複雑な実装を提供してくれる。

shadcn/ui は Radix UI の機能の上に Tailwind でスタイルを乗せる。

```
shadcn/ui Dialog
  = Radix UI Dialog（動作・アクセシビリティ）
  + Tailwind CSS（見た目）
```

### Portal とは何か

Dialog のコンテンツは `DialogPortal` を使って `<body>` 直下に描画される。

```
通常: <div class="app"> の中に Dialog
Portal: <body> 直下に Dialog
```

Portal を使う理由: CSS の `z-index` やクリッピングの問題を避けるため。
親要素の `overflow: hidden` や `z-index` に影響されなくなる。

---

## 何を実装するか

`src/lessons/06-dialog/DialogLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] ボタンをクリックするとダイアログが開くようにする
- [ ] `Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription` を使う
- [ ] `DialogFooter` に「キャンセル」と「確認」ボタンを配置する
- [ ] `src/components/ui/dialog.tsx` を開いて `@radix-ui/react-dialog` がどう使われているか確認する

### 画面イメージ

```
通常状態:
┌────────────────────────────────────┐
│ Lesson 06: Dialog                  │
│                                    │
│  [ダイアログを開く]                 │
│                                    │
└────────────────────────────────────┘

ダイアログ開いた状態:
┌────────────────────────────────────┐
│ ██████████████████████████████████ │ ← 暗いオーバーレイ
│ ██  ┌─────────────────────────┐ ██ │
│ ██  │ アカウントを削除しますか？│ ██ │ ← DialogTitle
│ ██  │                         │ ██ │
│ ██  │ この操作は取り消せません。│ ██ │ ← DialogDescription
│ ██  │                         │ ██ │
│ ██  │ [キャンセル] [削除する]  │ ██ │ ← DialogFooter
│ ██  └─────────────────────────┘ ██ │
│ ██████████████████████████████████ │
└────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
import DialogLesson from './lessons/06-dialog/DialogLesson'

{ label: '06 Dialog', Component: DialogLesson },
```

---

## ヒント

### Dialog の基本構造

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>開く</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>タイトル</DialogTitle>
      <DialogDescription>説明文</DialogDescription>
    </DialogHeader>
    {/* 本文 */}
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">キャンセル</Button>
      </DialogClose>
      <Button>確認</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### asChild とは

`DialogTrigger asChild` と書くと、DialogTrigger の機能（クリックでダイアログを開く）を子要素の Button に「移譲」できる。
Dialog 独自のボタンではなく、自分の Button を使える。

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Radix UI プリミティブと shadcn/ui の関係を1〜3行で書く -->

### 最小実装
```tsx
// 最もシンプルな Dialog の使い方を書く
```

### 実務での型
```tsx
// 削除確認ダイアログのパターンを書く
```

### 落とし穴
<!-- DialogTitle を省略したときのアクセシビリティ警告など -->

### 説明できる状態
<!-- Portal が必要な理由を説明できるようになったら書く -->
