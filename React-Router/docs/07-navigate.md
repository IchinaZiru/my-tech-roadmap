# Lesson 07: Navigate

## このレッスンで学ぶこと

`useNavigate` を使うと、ユーザーがリンクをクリックしなくても**プログラムから画面遷移**できる。

- フォーム送信後に結果ページへ移動
- ログイン成功後にダッシュボードへ移動
- ボタンで「前のページ」「次のページ」に移動

`<Link>` はクリックで遷移する UI 部品、`useNavigate` はロジックの中で遷移するフック、という使い分け。

---

## 何を実装するか

`src/lessons/07-navigate/NavigateLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `/` に名前を入力するフォームページを作る
- [ ] フォームを送信すると `/result` ページに遷移する
- [ ] `/result` ページに入力した名前を表示する（state で渡す）
- [ ] `/result` ページの「戻る」ボタンで `navigate(-1)` を使う

### 画面イメージ

入力ページ（`/`）：

```
Lesson 07: Navigate

名前を入力してください
[          ] [送信]
```

送信後（`/result`）：

```
Lesson 07: Navigate

こんにちは、Alice さん！

[← 戻る]
```

---

## App.tsx への接続方法

```tsx
import NavigateLesson from './lessons/07-navigate/NavigateLesson'
{ label: '07 Navigate', Component: NavigateLesson },
```

---

## ヒント

```tsx
import { useNavigate } from 'react-router-dom'

function Form() {
  const navigate = useNavigate()

  const handleSubmit = (name: string) => {
    // state に値を渡して遷移できる
    navigate('/result', { state: { name } })
  }
}

// 遷移先で state を受け取る
import { useLocation } from 'react-router-dom'

function Result() {
  const location = useLocation()
  const { name } = location.state as { name: string }
}

// 履歴を戻る
navigate(-1)
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- useNavigate の役割と Link との使い分けを1〜3行で書く -->
`useNavigate`命令的に遷移させる、さらに遷移先に状態を渡せる
`useLocation`受け取った状態を拾える
### 最小実装
```tsx
  const handleSubmit = (name: string) => {
    navigate('/result', { state: { name } })
  }

  const location = useLocation()
  const navigate = useNavigate()

  const name = location.state?.name || '名無し'
```

### 実務での型
```tsx
// state を渡して遷移
navigate('/result', { state: { name } })

// 履歴を戻る
navigate(-1)
```

### 落とし穴
<!-- よくあるエラーと回避策 -->
Navigate先をrouteで定義しないと遷移できない
### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
Navigateは処理後に遷移をさせることができる
Locationと組み合わせて状態を渡すことも可能