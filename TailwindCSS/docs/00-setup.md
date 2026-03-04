# 00: セットアップ — TailwindCSS v4 を Vite + React で始める

## TailwindCSS とは

TailwindCSS は「ユーティリティファースト CSS フレームワーク」。
`text-blue-500` `p-4` `flex` のような **小さなクラスを HTML に直接書く** スタイルで CSS を組み立てる。

> 従来の CSS: クラス名を考える → `.button-primary { color: blue; padding: 16px; }` と書く
> Tailwind: `className="text-blue-500 p-4"` と直接書く。クラス名を考えなくていい。

---

## v3 との違い（知っている人向け）

| 比較項目 | v3 | v4（このコース） |
|---------|-----|----------------|
| 設定ファイル | `tailwind.config.js` が必要 | **不要** |
| CSSへの読み込み | `@tailwind base/components/utilities` の3行 | `@import "tailwindcss"` の **1行** |
| Vite 連携 | `postcss.config.js` が必要 | `@tailwindcss/vite` プラグイン1行 |
| セットアップ難度 | やや複雑 | シンプル |

---

## セットアップ手順

```bash
# 1. TailwindCSS/ フォルダに移動
cd TailwindCSS

# 2. 依存パッケージをインストール（初回のみ）
npm install

# 3. 開発サーバー起動
npm run dev
```

ブラウザで `http://localhost:5173` を開くとナビゲーターが表示される。

---

## ファイル構成

```
TailwindCSS/
├── index.html              ← ブラウザが最初に読むファイル
├── vite.config.ts          ← Tailwind v4 プラグインを登録する設定
├── package.json            ← 使うパッケージの一覧
├── src/
│   ├── main.tsx            ← ReactをDOMにマウントするエントリーポイント
│   ├── index.css           ← @import "tailwindcss" の1行だけ。これでTailwindが有効になる
│   ├── App.tsx             ← レッスンナビゲーター
│   └── lessons/            ← 各レッスンの実装ファイル
│       ├── 01-hello-world/
│       ├── 02-spacing/
│       └── ...
└── docs/                   ← このファイル群。各レッスンの解説
```

### `vite.config.ts` が何をしているか

```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],  // ← これだけで Tailwind が動く
})
```

### `src/index.css` が何をしているか

```css
@import "tailwindcss";  /* ← これだけ。Tailwind の全クラスが使えるようになる */
```

---

## レッスンの進め方

1. `docs/NN-topic.md` を読んで、学ぶ概念を理解する
2. `src/lessons/NN-topic/XxxLesson.tsx` にコードを書く
3. `src/App.tsx` のコメントアウトされた `import` を外す
4. `LESSONS` 配列の `Component: null` を実装したコンポーネントに差し替える
5. ブラウザでナビゲーターのボタンをクリックして確認する

```tsx
// App.tsx — 例: Lesson 01 を接続するとき

// コメントを外す
import HelloWorldLesson from './lessons/01-hello-world/HelloWorldLesson'

// Component: null を差し替える
{ label: '01 Hello World', Component: HelloWorldLesson },
```
