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
onClick : クリックされたときに発火するイベント
onChange : 入力値が変わった時のイベント
onKeyDown : キーが入力された時のイベント
### 最小実装
```tsx
  // クリックイベントのハンドラ
  function handleClick() {
    setText(`hello`);
  }

  //テキスト入力のイベントハンドラ
  function handleChange(e){
    setText(e.target.value);
  }

  //Enterキーのイベントハンドラ
  function handleKeyDown(e){
    if(e.key === `Enter`){
      setText(e.target.value);
    }
  }
```

### 実務での型
```tsx
<button onClick={handleChange}>
<input onChange={handleChange}>
<input onKeyDown={handleKeyDown}>
```

### 落とし穴
様々な場合にイベントは仕様可能
イベントハンドラに渡す関数は渡すべきなのであって、呼び出すものではない
イベントハンドラをインラインで定義したい場合は無名関数でラップする
```tsx
<button onClick={() => alert('You clicked me!')}>
```
onChangeではe.target.value 
onKeyDown では e.currentTarget.value が安全
### 説明できる状態
onClickはクリック時、onChangeは変更時、onKeyDownはボタンの入力時に発火するイベントハンドラ
イベントハンドラをインラインで定義する場合はやイベントを作成したら関数そのものを渡さないとレンダーされた時に毎回ハンドラが実行されてしまう