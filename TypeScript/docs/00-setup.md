# 00: セットアップ — Vite で TypeScript プロジェクトを始める

## vanilla-ts テンプレートとは

React コースでは Vite + React + JSX を使った。
TypeScript コースでは**フレームワークなし**の `vanilla-ts` テンプレートを使う。
React・DOM 抽象化なしで、TypeScript と DOM API を直接扱う。

| 比較項目 | React コース | TypeScript コース |
|---------|-------------|-----------------|
| テンプレート | `vite --template react-ts` | `vite --template vanilla-ts` |
| エントリー | `src/main.tsx` + `src/App.tsx` | `src/main.ts`（1ファイル） |
| レッスン形式 | デフォルトエクスポート（JSX コンポーネント） | 名前付きエクスポート `run(): string` |
| 画面更新 | React の再レンダリング | `innerHTML` の直接書き換え |

---

## 起動手順

```bash
# TypeScript/ フォルダ内で実行（初回のみ）
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで `http://localhost:5173` を開くとアプリが表示される。

---

## ファイル構成

```
TypeScript/
├── index.html        ← ブラウザが最初に読むファイル。<div id="app"> が起点
├── vite.config.ts    ← Vite の設定（触らなくていい）
├── package.json      ← 使うパッケージの一覧と起動スクリプト
├── tsconfig.json     ← TypeScript コンパイラの設定
├── src/
│   ├── main.ts       ← ナビゲーター兼エントリーポイント
│   └── lessons/      ← 各レッスンの実装コード
│       ├── 01-hello-world/
│       └── ...
└── docs/             ← 各レッスンの解説 MD
    ├── 00-setup.md
    └── ...
```

---

## レッスンの進め方

1. `docs/NN-topic.md` を読む
2. `src/lessons/NN-topic/TopicLesson.ts` の `run()` 関数を実装する
3. `src/main.ts` のコメントアウトされた `import` を外す
4. `LESSONS` 配列の `run: null` を `run: LessonModule.run` に差し替える
5. ブラウザでボタンをクリックしてレッスンの出力を確認する

---

## main.ts への接続例（Lesson 01 の場合）

```ts
// コメントを外す
import * as HelloWorldLesson from './lessons/01-hello-world/HelloWorldLesson'

// run: null を変更する
{ label: '01 Hello World', run: HelloWorldLesson.run },
```
