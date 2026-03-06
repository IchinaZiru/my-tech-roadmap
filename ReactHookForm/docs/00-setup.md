# 00: セットアップ — React Hook Form 学習環境を作る

## React Hook Form とは

HTML の `<form>` を扱うとき、React の素のやり方（`useState` で各フィールドを管理する「制御コンポーネント」）は書く量が多く、再レンダリングも多い。

React Hook Form（RHF）は「フォームの状態管理をライブラリに任せる」ことで、コードを大幅に減らしてパフォーマンスも改善するライブラリ。

| 比較項目 | useState（制御コンポーネント） | React Hook Form |
|---------|-------------------------------|-----------------|
| 状態管理 | 自分で useState を書く | useForm に任せる |
| 再レンダリング | キー入力ごとに全体が再レンダリング | 最小限に抑える |
| バリデーション | 自分で書く | ルールを宣言するだけ |
| TypeScript との相性 | 手動で型を付ける | 型推論が効く |
| コード量 | 多い | 少ない |

---

## 起動手順

```bash
# ReactHookForm/ フォルダ内で実行（初回のみ）
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで `http://localhost:5173` を開くとアプリが表示される。
ファイルを保存するたびに自動でブラウザが更新される（Hot Module Replacement）。

---

## インストールされるパッケージ

| パッケージ | 役割 | 使うレッスン |
|-----------|------|------------|
| `react-hook-form` | フォーム状態管理の本体 | Lesson 01〜10 |
| `zod` | スキーマバリデーションライブラリ | Lesson 08〜10 |
| `@hookform/resolvers` | RHF と Zod をつなぐアダプター | Lesson 08〜10 |

---

## ファイル構成

```
ReactHookForm/
├── index.html          ← ブラウザが最初に読むファイル
├── vite.config.js      ← Vite の設定（触らなくていい）
├── package.json        ← パッケージ一覧
├── tsconfig.json       ← TypeScript 設定
├── src/
│   ├── main.tsx        ← ReactをDOMにマウントするエントリーポイント
│   ├── App.tsx         ← ルートコンポーネント（レッスンナビゲーター）
│   ├── App.css         ← グローバルスタイル
│   └── lessons/
│       ├── 01-hello-world/HelloWorldLesson.tsx
│       ├── 02-register/RegisterLesson.tsx
│       └── ...
└── docs/
    ├── 00-setup.md     ← このファイル
    ├── 01-hello-world.md
    └── ...
```

---

## レッスンの進め方

1. `docs/NN-topic.md` を読んで概念を理解する
2. `src/lessons/NN-topic/TopicLesson.tsx` を実装する
3. `src/App.tsx` のコメントアウトされた `import` を外す
4. `LESSONS` 配列の `Component: null` を実装したコンポーネントに差し替える
5. ブラウザで動作確認する

### App.tsx への接続例

```tsx
// コメントを外す（Lesson 01 の場合）
import HelloWorldLesson from './lessons/01-hello-world/HelloWorldLesson'

// LESSONS 配列を更新する
const LESSONS: Lesson[] = [
  { label: '01 Hello World', Component: HelloWorldLesson },  // null → コンポーネント
  { label: '02 register',    Component: null },
  // ...
]
```

---

## 学習の流れ

```
Lesson 01: useForm の基本を知る（Hello World）
    ↓
Lesson 02: register の仕組みを理解する
    ↓
Lesson 03: バリデーションルールを書く
    ↓
Lesson 04: エラーメッセージを表示する
    ↓
Lesson 05: watch でリアルタイム監視する
    ↓
Lesson 06: defaultValues と reset を使う
    ↓
Lesson 07: Controller でカスタムUIを統合する
    ↓
Lesson 08: Zod で型安全なバリデーションを書く
    ↓
Lesson 09: 非同期送信と送信中状態を扱う
    ↓
Lesson 10: useFieldArray で動的フォームを作る
```
