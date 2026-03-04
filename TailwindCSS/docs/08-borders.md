# Lesson 08: Borders

## このレッスンで学ぶこと

### ボーダーと装飾

「ボーダー（枠線）」「角丸」「影」「アウトラインリング」のクラス群。

これらを組み合わせるだけで、フラットな div が「カード」「ボタン」「入力欄」のように見えるようになる。デザインの質感はスペーシングと装飾でほぼ決まる。

### border vs ring の違い

- `border`: ボックスの境界線。要素の外枠を描く。
- `ring`: フォーカス時などに使うアウトライン。`box-shadow` で実装されているため、レイアウトに影響しない。

---

## 何を実装するか

`src/lessons/08-borders/BordersLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] ボーダーをつける（`border` / `border-2` / `border-4`）
- [ ] ボーダーの色を指定する（`border-gray-300` / `border-blue-500` など）
- [ ] 角を丸くする（`rounded` / `rounded-lg` / `rounded-xl` / `rounded-full`）
- [ ] 影をつける（`shadow` / `shadow-md` / `shadow-lg` / `shadow-xl`）
- [ ] アウトラインリングをつける（`ring-2 ring-blue-500`）

### 画面イメージ

```
┌──────────────────────────────────────────────┐
│ Lesson 08: Borders                           │
│                                              │
│ ┌──────────────┐   ╔══════════════╗          │
│ │ border       │   ║ border-2     ║          │
│ └──────────────┘   ╚══════════════╝          │
│                                              │
│ ╭────────────╮   ●●●●●●●●●●●●●●●            │
│ │ rounded-lg │   ●  rounded-full ●          │
│ ╰────────────╯   ●●●●●●●●●●●●●●●            │
│                                              │
│ ┌──────────────────┐  （影あり）              │
│ │  shadow-lg card  │                         │
│ └──────────────────┘                         │
└──────────────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
// コメントを外す
import BordersLesson from './lessons/08-borders/BordersLesson'

// Component: null を差し替える
{ label: '08 Borders', Component: BordersLesson },
```

---

## ヒント

### border の組み合わせ

```tsx
// border だけだと色が見えないことがある（デフォルトは currentColor）
// border-gray-300 などで色を明示的に指定する
<div className="border border-gray-300">枠線あり</div>
<div className="border-2 border-blue-500">太い青い枠線</div>
```

### rounded の大きさ

```
rounded-none  → 0px     （角丸なし）
rounded-sm    → 2px
rounded       → 4px     （わずかな丸み）
rounded-md    → 6px
rounded-lg    → 8px     （カードによく使う）
rounded-xl    → 12px
rounded-2xl   → 16px
rounded-3xl   → 24px
rounded-full  → 9999px  （完全な丸・楕円）
```

### shadow の大きさ

```
shadow-sm   → 小さい影
shadow      → 標準的な影（カードに使いやすい）
shadow-md   → 少し大きめ
shadow-lg   → 大きい影（フォーカスされた要素・モーダル）
shadow-xl   → さらに大きい
shadow-2xl  → 最大
shadow-none → 影を消す
```

### カードの典型的な組み合わせ

```tsx
<div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
  カードコンテンツ
</div>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- border と ring の違いを1文で書く -->

### 最小実装
```tsx
// シンプルなカードの最小コードを書く
```

### 実務での型
```tsx
// ボタン・入力欄・カードそれぞれの典型的なボーダー/角丸パターンを書く
```

### 落とし穴
<!-- border だけで色がわかりにくい場合の対処法など -->

### 説明できる状態
<!-- rounded-full でどんな形になるか即答できたら書く -->
