# 開発環境セットアップ

## 必要なもの
- Node.js 18以上（`node -v` で確認）
- npm（Node.jsに同梱）

## セットアップ手順

```bash
# 1. このフォルダに移動
cd TanStackQuery

# 2. 依存パッケージをインストール
npm install

# 3. 開発サーバーを起動
npm run dev
```

## 起動確認

ブラウザで `http://localhost:5173` を開く。
ナビゲーターが表示され、「このレッスンはまだ実装されていません。」と出ればOK。

## インストールされるもの

| パッケージ | 役割 |
|-----------|------|
| `@tanstack/react-query` | サーバー状態管理ライブラリ（本体） |
| `react` / `react-dom` | UIライブラリ |
| `tailwindcss` | スタイリング |
| `vite` | 開発サーバー・ビルドツール |
| `typescript` | 型チェック |

## フォルダ構成

```
TanStackQuery/
├── src/
│   ├── main.tsx         ← QueryClientProvider がここにある
│   ├── App.tsx          ← レッスン切り替えナビゲーター
│   ├── index.css        ← Tailwind の読み込み
│   └── lessons/         ← 各レッスンの実装ファイル
├── docs/                ← 各レッスンのドキュメント（ここ）
└── index.html
```

## 学習の進め方

1. `docs/01-hello-world.md` を読む
2. `src/lessons/01-hello-world/HelloWorldLesson.tsx` を実装する
3. `src/App.tsx` のコメントを外してレッスンを接続する
4. ブラウザで動作確認する
5. 学習ノートを埋める

## TanStack Query とは

「サーバーから取得したデータ」の管理に特化したライブラリ。
`fetch` や `axios` で取得したデータを自動的にキャッシュ・再取得・同期してくれる。

**React の useState との違い:**

| | useState | TanStack Query |
|--|---------|----------------|
| 管理するもの | ローカルの状態（UI） | サーバーから来たデータ |
| キャッシュ | なし | 自動でキャッシュ |
| 再取得 | 手動 | 自動（条件設定可能） |
| ローディング管理 | 自分で書く | `isPending` で自動 |
