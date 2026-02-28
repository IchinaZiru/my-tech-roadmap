# Lesson 05: Events（イベント）

## このレッスンで学ぶこと

ユーザーの操作（クリック・入力・キー押下）に反応してコードを実行する仕組み。
Reactのイベント名は camelCase（`onClick`、`onChange`、`onKeyDown`）。
イベントハンドラには「関数の参照」を渡す（`onClick={fn}` であり `onClick={fn()}` ではない）。

---

## 何を実装するか

`src/lessons/05-events/EventsLesson.jsx` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `onClick` — ボタンをクリックしたら何かが変わる
- [ ] `onChange` — テキスト入力の内容をリアルタイムで表示する
- [ ] `onKeyDown` — Enter キーを押したときだけ処理を実行する
- [ ] イベントオブジェクト `e` を使って `e.target.value` で入力値を取得する

### 画面イメージ

```
Lesson 05: Events

[クリックしてみて]  ← onClick

テキスト入力: [____________]
入力中の文字: ○○○○        ← onChange でリアルタイム表示

Enterで確定: [____________]
確定した文字: （Enterを押すと更新）
```

---

## ヒント

```jsx
// 関数の参照を渡す（正しい）
<button onClick={handleClick}>

// アロー関数でラップする（正しい）
<button onClick={() => setCount(count + 1)}>

// 即実行してしまう（間違い）
<button onClick={handleClick()}>
```

```jsx
// e.target.value でinputの値を取得
<input onChange={(e) => setValue(e.target.value)} />
```

---

## App.jsx への接続方法

```jsx
import EventsLesson from './lessons/05-events/EventsLesson'
{ label: '05 Events', Component: EventsLesson },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念

### 最小実装
```jsx
```

### 実務での型
```jsx
```

### 落とし穴

### 説明できる状態
