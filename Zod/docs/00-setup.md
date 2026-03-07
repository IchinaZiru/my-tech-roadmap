# 00: セットアップ

## 必要なもの

- Node.js 18以上（`node -v` で確認）
- npm 9以上（`npm -v` で確認）
- VSCode（推奨）

## 手順

```bash
# 1. Zod フォルダに移動
cd Zod

# 2. 依存パッケージをインストール
npm install

# 3. 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:5173` を開くと、レッスンナビゲーターが表示されます。

## フォルダ構成

```
Zod/
├── src/
│   ├── App.tsx                  ← レッスンナビゲーター
│   └── lessons/
│       ├── 01-hello-world/      ← 各レッスンの実装ファイル
│       └── ...
└── docs/
    ├── 00-setup.md              ← このファイル
    └── 01-hello-world.md        ← 各レッスンのドキュメント
```

## レッスンの進め方

1. `docs/XX-topic.md` を読んで概念を理解する
2. `src/lessons/XX-topic/XxxLesson.tsx` にコードを書く
3. `src/App.tsx` のコメントを外してレッスンを有効化する
4. ブラウザで動作を確認する
5. `docs/XX-topic.md` の学習ノートを埋める

## レッスンの有効化方法

`src/App.tsx` を開いて、実装したレッスンのimportコメントを外す：

```tsx
// ↓ コメントを外す
import HelloWorldLesson from './lessons/01-hello-world/HelloWorldLesson'

// ↓ Component: null を差し替える
{ label: '01 Hello World', Component: HelloWorldLesson },
```

## Zod とは

TypeScript 向けのスキーマバリデーションライブラリです。
「このデータがこの形であるはずだ」という定義（スキーマ）を書いて、
実際のデータがその定義に合っているかを検証します。

```ts
import { z } from 'zod'

const schema = z.string()
schema.parse("hello")  // OK: "hello" を返す
schema.parse(123)      // エラー: 数値は文字列ではない
```
