# Lesson 10: States

## このレッスンで学ぶこと

### 状態バリアントとは

ユーザーの操作（マウスホバー、キーボードフォーカス、クリック中など）に応じてスタイルを変えるクラス群。

レスポンシブの `sm:` と同じ仕組みで、**`{状態}:{クラス名}`** の形式で書く。

```tsx
hover:bg-blue-600   → マウスが乗ったとき背景を濃い青に
focus:ring-2        → キーボードフォーカス時にリングを表示
active:scale-95     → クリック中に少し縮む
disabled:opacity-50 → disabled 属性があるとき半透明に
```

### なぜ状態スタイルが重要か

静的なスタイルだけでは「クリックできる要素」かどうかがユーザーに伝わらない。`hover:` でカーソルを乗せたとき変化することで「インタラクティブな要素」だとわかる。アクセシビリティにも関わる。

---

## 何を実装するか

`src/lessons/10-states/StatesLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] ホバー時のスタイルを指定する（`hover:bg-blue-600` など）
- [ ] フォーカス時のスタイルを指定する（`focus:outline-none focus:ring-2`）
- [ ] アクティブ時のスタイルを指定する（`active:scale-95`）
- [ ] disabled 状態のスタイルを指定する（`disabled:opacity-50 disabled:cursor-not-allowed`）
- [ ] `transition` でアニメーションをつける（`transition-colors` / `transition-all`）

### 画面イメージ

```
┌───────────────────────────────────────────────┐
│ Lesson 10: States                             │
│                                               │
│ [  通常ボタン  ]  ← デフォルト状態           │
│ [  ホバー中   ]  ← マウスを乗せると変化      │
│ [  クリック中 ]  ← active: で縮む            │
│                                               │
│ [disabled ボタン]  ← 半透明、カーソル変わる  │
│                                               │
│ ┌────────────────────┐ ← 通常              │
│ └────────────────────┘                        │
│ ┌────────────────────┐ ← focus 時にリング   │
│ └────────────────────┘                        │
└───────────────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
// コメントを外す
import StatesLesson from './lessons/10-states/StatesLesson'

// Component: null を差し替える
{ label: '10 States', Component: StatesLesson },
```

---

## ヒント

### hover: の基本

```tsx
// マウスを乗せると背景色が変わる
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  ボタン
</button>
```

### focus: でキーボード操作のUX向上

```tsx
// フォーカス時に outline を消して ring で代替する（アクセシビリティ対応）
<button className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  フォーカス対応ボタン
</button>
```

### transition で動きをなめらかにする

```tsx
// transition-colors: 色の変化をアニメーション
<button className="bg-blue-500 hover:bg-blue-700 transition-colors duration-200">
  なめらかに変わる
</button>

// transition-all: 全プロパティをアニメーション
<div className="scale-100 hover:scale-105 transition-all duration-300">
  ホバーで拡大
</div>
```

### active: でクリック感を演出

```tsx
<button className="active:scale-95 transition-transform">
  クリックすると縮む
</button>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- 状態バリアントとは何か、1〜3行で書く -->

### 最小実装
```tsx
// hover と transition を組み合わせたボタンの最小コードを書く
```

### 実務での型
```tsx
// プライマリボタンの hover/focus/active/disabled の完全なスタイルを書く
```

### 落とし穴
<!-- transition を付け忘れると変化が瞬間的になる点など -->

### 説明できる状態
<!-- hover: と focus: のどちらが先に適用されるか、なぜ両方必要かを説明できたら書く -->
