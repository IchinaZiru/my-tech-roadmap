# TypeScript 学習

## 目標

TypeScript の型システムの基礎から実践まで、自分の手でコードを書いて理解する。
最終的に型安全なコードを一から自分で書けるようになる。

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
| 01 | Hello World | 型アノテーション基本 | `src/lessons/01-hello-world/` | `docs/01-hello-world.md` |
| 02 | Basic Types | string / number / boolean / null / undefined | `src/lessons/02-basic-types/` | `docs/02-basic-types.md` |
| 03 | Type Inference | 型推論 | `src/lessons/03-type-inference/` | `docs/03-type-inference.md` |
| 04 | Arrays & Tuples | 配列型・タプル型 | `src/lessons/04-arrays-tuples/` | `docs/04-arrays-tuples.md` |
| 05 | Objects & Types | type エイリアス | `src/lessons/05-objects-types/` | `docs/05-objects-types.md` |
| 06 | Interfaces | interface / extends | `src/lessons/06-interfaces/` | `docs/06-interfaces.md` |
| 07 | Functions | 引数・戻り値・オプション引数 | `src/lessons/07-functions/` | `docs/07-functions.md` |
| 08 | Union & Literal | ユニオン型・リテラル型 | `src/lessons/08-union-literal/` | `docs/08-union-literal.md` |
| 09 | Generics | ジェネリクス \<T\> | `src/lessons/09-generics/` | `docs/09-generics.md` |
| 10 | Type Narrowing | typeof / instanceof / 型ガード | `src/lessons/10-type-narrowing/` | `docs/10-type-narrowing.md` |
| 11 | Utility Types | Partial / Pick / Omit / Readonly | `src/lessons/11-utility-types/` | `docs/11-utility-types.md` |

---

## ファイル構成

```
TypeScript/
├── src/
│   ├── main.ts              ← ナビゲーター兼エントリーポイント
│   └── lessons/             ← 各レッスンの実装コード
│       ├── 01-hello-world/
│       └── ...
├── docs/                    ← 各レッスンの解説 MD
│   ├── 00-setup.md
│   └── ...
├── index.html
├── package.json
└── vite.config.ts
```
