# Lesson 01: Hello World

## このレッスンで学ぶこと

### shadcn/ui とは何か

shadcn/ui は「インストールして使うライブラリ」ではなく、**コードをプロジェクトに直接コピーして使う仕組み**。

通常のライブラリ（React, Tailwind など）は `node_modules/` の中に存在し、インポートして使う。
shadcn/ui は CLI でコンポーネントを追加すると、**自分のプロジェクト内に `.tsx` ファイルが生成される**。

```bash
npx shadcn@latest add button
# → src/components/ui/button.tsx が生成される
```

生成されたファイルは自由に編集できる。これが shadcn/ui の最大の特徴。

### なぜそう設計されているのか

- 自分のプロジェクトに最適化したカスタマイズができる
- ライブラリのバージョンアップに振り回されない
- 内部の実装を読んで理解できる

---

## 何を実装するか

`src/lessons/01-hello-world/HelloWorldLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] `Button` コンポーネントをインポートして表示する
- [ ] 「shadcn/ui へようこそ！」と表示されるボタンを作る
- [ ] `src/components/ui/button.tsx` を開いて、中身のコードを見てみる
- [ ] shadcn/ui が「ライブラリではなくコードをコピーする仕組み」だと理解する

### 画面イメージ

```
┌──────────────────────────────────────┐
│ Lesson 01: Hello World               │
│                                      │
│  ┌─────────────────────────────┐    │
│  │  shadcn/ui へようこそ！      │    │  ← Button コンポーネント
│  └─────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
// コメントを外す
import HelloWorldLesson from './lessons/01-hello-world/HelloWorldLesson'

// Component: null を差し替える
{ label: '01 Hello World', Component: HelloWorldLesson },
```

---

## ヒント

### Button のインポートと使い方

```tsx
import { Button } from '@/components/ui/button'

// こう使う
<Button>テキスト</Button>
```

`@/` は `src/` を指すパスエイリアス（`tsconfig.app.json` の `paths` で設定されている）。

### コンポーネントファイルを読んでみよう

`src/components/ui/button.tsx` を開くと以下のものが見える:

- `cva(...)` — バリアントを定義している（Lesson 03 で詳しく学ぶ）
- `cn(...)` — クラスを結合している（Lesson 02 で詳しく学ぶ）
- `React.forwardRef` — ref を外から受け取れるようにしている

今は「こんな構造なんだな」と眺めるだけで OK。

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- shadcn/ui とは何か、1〜3行で書く -->
shadcnが提供しているコンポーネントをローカルにコピーして活用可能
`npx`
### 最小実装
```tsx
<Button>shadcn/ui へようこそ！</Button>
```

### 実務での型
```tsx
<Button onClick={handleClick}>shadcn/ui へようこそ！</Button>
```

### 落とし穴
<!-- よくあるミスと回避策 -->
使用したいコンポーネントは必ずインストール
### 説明できる状態
<!-- shadcn/ui がライブラリではない理由を口頭で説明できるようになったら書く -->
