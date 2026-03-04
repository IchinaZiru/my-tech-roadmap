# 00: セットアップ — React Router を始める

## React Router とは

React だけでは「URLが変わっても表示が変わらない」シングルページアプリになる。
React Router を追加すると、URL に応じて表示するコンポーネントを切り替えられる。

| 比較項目 | React のみ | React + React Router |
|---------|-----------|----------------------|
| URL の役割 | 変わらない（常に `/`） | URL がページを表す |
| 「戻る」ボタン | 効かない | 効く |
| ページのシェア | できない | URL をコピーして共有できる |
| 実務での使われ方 | 稀 | ほぼ全てのSPAで使う |

---

## 起動手順

```bash
# React-Router/ フォルダ内で実行（初回のみ）
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで `http://localhost:5173` を開くとアプリが表示される。

---

## ファイルの役割

```
React-Router/
├── index.html         ← ブラウザが最初に読むファイル
├── package.json       ← 使うパッケージの一覧（react-router-dom が追加済み）
├── vite.config.ts     ← Viteの設定（触らなくていい）
├── src/
│   ├── main.tsx       ← ReactをDOMにマウントするエントリーポイント
│   ├── App.tsx        ← レッスンナビゲーター（React コースと同じ構造）
│   └── lessons/       ← 各レッスンの実装ファイル
└── docs/              ← 各レッスンのドキュメント（このファイルたち）
```

---

## このコースの特徴

### MemoryRouter について

各レッスンは学習用に `<MemoryRouter>` で独立して動く。
MemoryRouter は「ブラウザの URL は変えずにルーティングを管理する」特殊なルーター。

**実際のアプリでは `<BrowserRouter>` を最上位に1つだけ置く**（Lesson 01 で詳しく解説）。

### レッスンの進め方

1. `docs/XX-topic.md` を読んで概念を理解する
2. `src/lessons/XX-topic/TopicLesson.tsx` にコードを書く
3. `src/App.tsx` のコメントを外してコンポーネントを繋ぐ
4. `npm run dev` で動作確認する
5. `学習ノート` を自分の言葉で埋める
