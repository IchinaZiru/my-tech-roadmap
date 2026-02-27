# React 学習

## 目標

Reactの基礎から応用まで、自分の手でコードを書いて理解する。
最終的に応用的なコードを一から自分で書けるようになる。

---

## 起動方法

```bash
npm install   # 初回のみ
npm run dev   # → http://localhost:5173
```

---

## レッスン一覧

| # | レッスン | 概念 | 実装 | ドキュメント |
|---|---------|------|------|------------|
| 01 | JSX | `{}`埋め込み / className / style={{}} | `src/lessons/01-jsx/` | `docs/01-jsx.md` |
| 02 | Components | 関数コンポーネント / 再利用 | `src/lessons/02-components/` | `docs/02-components.md` |
| 03 | Props | 親→子のデータ渡し / 読み取り専用 | `src/lessons/03-props/` | `docs/03-props.md` |
| 04 | useState | 状態変数 / 再レンダリング | `src/lessons/04-useState/` | `docs/04-useState.md` |
| 05 | Events | onClick / onChange / e.target | `src/lessons/05-events/` | `docs/05-events.md` |
| 06 | Conditional | 三項演算子 / && / null返却 | `src/lessons/06-conditional/` | `docs/06-conditional.md` |
| 07 | Lists | map+key / 不変更新 | `src/lessons/07-lists/` | `docs/07-lists.md` |
| 08 | useEffect | 副作用 / 依存配列 / クリーンアップ | `src/lessons/08-useEffect/` | `docs/08-useEffect.md` |
| 09 | Forms | 制御コンポーネント / バリデーション | `src/lessons/09-forms/` | `docs/09-forms.md` |
| 10 | Custom Hooks | ロジックの切り出し / useFetch | `src/lessons/10-custom-hooks/` | `docs/10-custom-hooks.md` |
| 11 | useContext | createContext / Provider / prop drilling解消 | `src/lessons/11-useContext/` | `docs/11-useContext.md` |

---

## ドキュメントの構成（docs/ の各MDの型）

```
## 概念          ← この技術は何を解決するか（1〜3行）
## 最小実装       ← Hello Worldレベルのコード
## 実務での型     ← よく使うパターン
## 落とし穴       ← よくあるエラーと回避策
## 説明できる状態  ← 口頭で説明できれば理解した証拠
```

---

## ファイル構成

```
React/
├── src/
│   ├── main.jsx            ← エントリーポイント（触らない）
│   ├── App.jsx             ← レッスンナビゲーター
│   ├── App.css             ← グローバルスタイル
│   └── lessons/            ← 各レッスンの実装コード
│       ├── 01-jsx/
│       └── ...
├── docs/                   ← 各レッスンの解説MD
│   ├── 00-setup.md
│   └── ...
├── index.html
├── package.json
└── vite.config.js
```
