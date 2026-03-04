# Lesson 08: Search Params

## このレッスンで学ぶこと

URL の `?` 以降をクエリパラメータ（またはサーチパラメータ）という。

```
/search?q=react&page=2
         ↑       ↑
         キー=値  キー=値
```

`useSearchParams` フックで読み書きできる。
**ページをリロードしても状態が保持される**のが最大のメリット。
検索・フィルター・ページネーションなどに使う。

---

## 何を実装するか

`src/lessons/08-search-params/SearchParamsLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] テキスト入力欄を作る
- [ ] 入力するたびに URL の `?q=入力値` が更新される
- [ ] URL の `?q=...` の値を読んでフィルタリングした結果を表示する
- [ ] ページをリロード（`initialEntries` を変更）しても入力値が保持される

### 画面イメージ

何も入力していない状態：

```
Lesson 08: Search Params

検索: [          ]

- React
- Vue
- Angular
- Svelte
```

"re" と入力すると（URL: `?q=re`）：

```
検索: [re        ]

- React
```

---

## App.tsx への接続方法

```tsx
import SearchParamsLesson from './lessons/08-search-params/SearchParamsLesson'
{ label: '08 Search Params', Component: SearchParamsLesson },
```

---

## ヒント

```tsx
import { useSearchParams } from 'react-router-dom'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams()

  // 読む
  const q = searchParams.get('q') ?? ''

  // 書く
  const handleChange = (value: string) => {
    setSearchParams({ q: value })
  }
}
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- useSearchParams の役割を1〜3行で書く -->

### 最小実装
```tsx
// 最もシンプルな useSearchParams の使い方を書く
```

### 実務での型
```tsx
// よく使うパターンを書く
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
