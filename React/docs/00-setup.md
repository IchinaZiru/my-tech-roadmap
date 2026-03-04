# 00: セットアップ — Viteでプロジェクトを始める

## CDN方式との違い

以前のカウンターアプリは `<script src="https://unpkg.com/react/...">` のようにCDNからReactを読み込んでいた。
Viteを使うと**ビルドツール**が間に入り、以下が変わる。

| 比較項目 | CDN方式 | Vite方式 |
|---------|---------|----------|
| Reactの読み込み | URLから直接 | `npm install` でローカルに |
| JSXの変換 | ブラウザ上でBabelが実行 | Viteがビルド時に変換（高速） |
| ファイル分割 | できない（1ファイル） | できる（importで分割） |
| 実務との近さ | 遠い | 近い |
| 起動方法 | htmlをブラウザで開く | `npm run dev` でサーバー起動 |

---

## 起動手順

```bash
# React/ フォルダ内で実行（初回のみ）
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで `http://localhost:5173` を開くとアプリが表示される。
ファイルを保存するたびに自動でブラウザが更新される（Hot Module Replacement）。

---

## 生成されたファイルの役割

```
React/
├── index.html       ← ブラウザが最初に読むファイル。<div id="root"> が起点
├── vite.config.js   ← Viteの設定（触らなくていい）
├── package.json     ← 使うパッケージの一覧と起動スクリプト
├── src/
│   ├── main.jsx     ← ReactをDOMにマウントするエントリーポイント
│   ├── App.jsx      ← ルートコンポーネント（レッスンナビゲーター）
│   └── App.css      ← グローバルスタイル
└── node_modules/    ← npm install で自動生成（gitignore済み）
```

### `main.jsx` が何をしているか

```jsx
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
```

`index.html` の `<div id="root">` を見つけて、そこに `<App />` を描画する。
CDN版で書いた `ReactDOM.createRoot(...).render(...)` と全く同じ処理。

---

## レッスンの進め方

1. `src/lessons/` フォルダに各レッスンのファイルを作成する
2. `App.jsx` のコメントアウトされた `import` を外す
3. `LESSONS` 配列の `Component: null` を実装したコンポーネントに差し替える
4. `npm run dev` でブラウザを確認する
