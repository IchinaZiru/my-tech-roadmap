# Lesson 11: Dark Mode

## このレッスンで学ぶこと

### ダークモードとは

画面全体の色を「白背景・黒テキスト（ライトモード）」から「黒背景・白テキスト（ダークモード）」に切り替える仕組み。

### Tailwind のダークモードの仕組み

Tailwind v4 では、HTML要素に `class="dark"` が付いているとき `dark:` プレフィックスのクラスが適用される。

```tsx
// dark クラスがついた親要素の中では dark: が有効になる
<div className="dark">
  <p className="text-gray-900 dark:text-gray-100">
    ライトでは暗いテキスト、ダークでは明るいテキスト
  </p>
</div>
```

### なぜ React の state で管理するのか

「ボタンを押すとダーク/ライトが切り替わる」ためには、`useState` で切り替え状態を持ち、その値に応じてクラスを付け外しする。

---

## 何を実装するか

`src/lessons/11-dark-mode/DarkModeLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] `useState` でダークモードの on/off を管理する
- [ ] 最も外側の `div` に `dark` クラスを動的に付け外しする
- [ ] `dark:bg-gray-900` など `dark:` バリアントでスタイルを指定する
- [ ] ボタンクリックで切り替わることを確認する
- [ ] テキスト・背景・ボーダーをそれぞれ `dark:` に対応させる

### 画面イメージ

```
ライトモード:                  ダークモード:
┌──────────────────────┐      ┌──────────────────────┐
│ 白い背景             │      │████████████████████████│
│                      │      │                        │
│ 暗いテキスト         │      │ 明るいテキスト         │
│                      │      │                        │
│ [ダークモードON]     │      │ [ダークモードOFF]      │
└──────────────────────┘      └────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
// コメントを外す
import DarkModeLesson from './lessons/11-dark-mode/DarkModeLesson'

// Component: null を差し替える
{ label: '11 Dark Mode', Component: DarkModeLesson },
```

---

## ヒント

### dark クラスの付け外し

```tsx
// useState で isDark を管理する
const [isDark, setIsDark] = useState(false)

// className に条件でクラスを追加する
<div className={isDark ? 'dark' : ''}>
  ...
</div>
```

### dark: バリアントの使い方

```tsx
// ライト: bg-white（白）、ダーク: bg-gray-900（ほぼ黒）
<div className="bg-white dark:bg-gray-900">

// ライト: text-gray-900（黒テキスト）、ダーク: text-gray-100（白テキスト）
<p className="text-gray-900 dark:text-gray-100">テキスト</p>

// ライト: border-gray-200、ダーク: border-gray-700
<div className="border border-gray-200 dark:border-gray-700">
```

### よく使うダークモードの色の対応

| 用途 | ライトモード | ダークモード |
|------|------------|------------|
| ページ背景 | `bg-white` | `dark:bg-gray-950` |
| カード背景 | `bg-gray-50` | `dark:bg-gray-800` |
| メインテキスト | `text-gray-900` | `dark:text-gray-100` |
| サブテキスト | `text-gray-500` | `dark:text-gray-400` |
| ボーダー | `border-gray-200` | `dark:border-gray-700` |

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Tailwind のダークモードがどう機能するか、1〜3行で書く -->

### 最小実装
```tsx
// ダークモードをトグルする最小コードを書く
```

### 実務での型
```tsx
// localStorage でダーク設定を保存してページをリロードしても維持するパターンを書く
```

### 落とし穴
<!-- dark クラスが効かない → 親要素に dark がついているか確認、など -->

### 説明できる状態
<!-- dark: バリアントが機能する条件を即答できたら書く -->
