# セットアップ

## このコースについて

shadcn/ui の基礎概念と書き方を学ぶコース。
Lesson 01 から順に進む。各レッスンは `src/lessons/XX-*/` に実装ファイルがある。

---

## 起動手順

```bash
# shadcn-ui フォルダに移動
cd shadcn-ui

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:5173 を開く。

---

## フォルダ構成

```
shadcn-ui/
├── src/
│   ├── App.tsx                    ← レッスン切り替えナビゲーター
│   ├── index.css                  ← Tailwind + shadcn/ui テーマ変数
│   ├── lib/
│   │   └── utils.ts               ← cn() ユーティリティ関数
│   ├── components/
│   │   └── ui/                    ← shadcn/ui コンポーネント群
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...
│   └── lessons/
│       ├── 01-hello-world/        ← ここに実装する
│       ├── 02-cn-utility/
│       └── ...
└── docs/
    ├── 00-setup.md                ← このファイル
    ├── 01-hello-world.md
    └── ...
```

---

## レッスンの進め方

### 1. ドキュメントを読む

`docs/XX-topic.md` を読んで概念を理解してから実装に進む。

### 2. 実装する

`src/lessons/XX-topic/TopicLesson.tsx` を編集する。

### 3. ナビゲーターに接続する

実装後、`src/App.tsx` を編集して import のコメントを外す。

```tsx
// コメントを外す
import HelloWorldLesson from './lessons/01-hello-world/HelloWorldLesson'

// Component: null を差し替える
{ label: '01 Hello World', Component: HelloWorldLesson },
```

---

## shadcn/ui とは何か（概要）

shadcn/ui は「コンポーネントライブラリ」ではなく、**コードをプロジェクトにコピーして使う仕組み**。

通常のライブラリ（例: MUI）は `npm install` してパッケージとして使う。
shadcn/ui は `npx shadcn@latest add button` を実行すると、`src/components/ui/button.tsx` が**プロジェクトに直接生成される**。

このコースでは、その生成されたファイルがあらかじめ `src/components/ui/` に入っている。
Lesson 02 では、このファイルを読んで仕組みを理解する。

---

## 技術スタック

| 技術 | 役割 |
|------|------|
| React + TypeScript | UI 構築 |
| Vite | ビルドツール・開発サーバー |
| Tailwind CSS v4 | スタイリング |
| Radix UI | アクセシブルなプリミティブ（Dialog, Tabs など） |
| class-variance-authority | バリアント管理（cva） |
| clsx + tailwind-merge | クラス結合ユーティリティ（cn） |
