# Lesson 06: Conditional Rendering（条件付きレンダリング）

## このレッスンで学ぶこと

state の値によって表示する要素を切り替える。
JSX の中では JavaScript の式をそのまま使って条件分岐できる。

---

## 何を実装するか

`src/lessons/06-conditional/ConditionalLesson.jsx` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] **三項演算子** — `条件 ? A : B` で2つの表示を切り替える
- [ ] **&&演算子** — `条件 && <要素>` で表示/非表示を切り替える
- [ ] **null返却** — 条件が偽のとき `return null` して何も表示しないコンポーネントを作る
- [ ] ボタンで状態を変えて、上記のどれかが動くのを確認する

### 画面イメージ

```
Lesson 06: 条件付きレンダリング

ログイン状態: ログイン中  ← 三項演算子

ようこそ！               ← && 演算子（ログイン中のときだけ表示）

[成功メッセージを出す] [エラーを出す] [消す]

✅ 保存しました！         ← ボタンに応じて表示が変わる
```

---

## ヒント

```jsx
// 三項演算子（if/else）
{isLoggedIn ? 'ログイン中' : 'ログアウト'}

// &&演算子（trueのときだけ表示）
{isLoggedIn && <p>ようこそ！</p>}

// nullを返すと何も表示されない
function Alert({ message }) {
  if (!message) return null
  return <p>{message}</p>
}
```

### 落とし穴：0が表示される

```jsx
// NG: countが0のとき "0" が画面に表示されてしまう
{count && <p>アイテム</p>}

// OK: 明示的に boolean に変換する
{count > 0 && <p>アイテム</p>}
```

---

## App.jsx への接続方法

```jsx
import ConditionalLesson from './lessons/06-conditional/ConditionalLesson'
{ label: '06 Conditional', Component: ConditionalLesson },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
三項演算子によってifを一行で書くことができる
&&を使用することでtrue時,false時の条件にそった処理に進むことができる
### 最小実装
```tsx
      <button onClick={() => {
        setIsLoggedIn(!isLoggedIn)
        setMessage('')}}>
        {isLoggedIn ? 'ログアウト' : 'ログイン'}
      </button>

      {isLoggedIn && <p>ようこそ！</p>}
```

### 実務での型
```tsx
  function handleToggleLogin() {
    setIsLoggedIn(prev => !prev)
    setMessage('')
  }
```

### 落とし穴
メッセージを出すときに空文字の場合にnullを返さないとタグが残ってしまう可能性がある
### 説明できる状態
三項演算子は `xxxx ? true : false`で分岐
&&によって分岐後の処理を繋げることができる
null返却で安全にタグを消すことができる
アロー関数に`{}`を使うと複数処理を入れることができる