# Lesson 07: Lists（リストとkey）

## このレッスンで学ぶこと

配列データを `.map()` で JSX の要素に変換して表示する。
各要素には一意な `key` props が必要（Reactが差分を判定するため）。
配列の更新はスプレッド構文を使った「不変更新」が基本。

---

## 何を実装するか

`src/lessons/07-lists/ListsLesson.jsx` に Todo リストを作る。

### 実装チェックリスト

- [ ] 初期データとして Todo の配列を `useState` で持つ
- [ ] `.map()` で配列を `<li>` に変換して表示する
- [ ] 各 `<li>` に `key={todo.id}` を設定する
- [ ] 入力フォームで新しい Todo を追加できる
- [ ] クリックで Todo の完了/未完了を切り替える（完了したら打ち消し線）
- [ ] 残り件数を表示する

### 画面イメージ

```
Lesson 07: リストとkey

[________________] [追加]

• JSXを理解する       ← 完了済み（打ち消し線）
• useStateを覚える    ← 完了済み
• useEffectを学ぶ     ← 未完了

残り 1 件
```

---

## ヒント

```jsx
// 配列 → JSX に変換（keyは必須）
{todos.map(todo => (
  <li key={todo.id}>{todo.text}</li>
))}

// 配列に追加（元の配列を変更しない）
setTodos([...todos, { id: Date.now(), text: '新しいTodo' }])

// 配列の一部を更新
setTodos(todos.map(t =>
  t.id === id ? { ...t, done: !t.done } : t
))
```

### 落とし穴：key にインデックスを使わない

```jsx
// NG: 並び替えやフィルタ時に誤動作する
{todos.map((todo, i) => <li key={i}>...)}

// OK: 安定したIDを使う
{todos.map(todo => <li key={todo.id}>...)}
```

---

## App.jsx への接続方法

```jsx
import ListsLesson from './lessons/07-lists/ListsLesson'
{ label: '07 Lists', Component: ListsLesson },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
.map()で配列の全要素を変換
`<li>`では一意に判断するkey必要
### 最小実装
```jsx
  //Todo 残り件数計算
  const unfinishedCount : number = todos.filter(t => !t.done).length
  // ここに実装する
  //input管理
  const [input, setInput] = useState('')

  //Todo追加関数
  function addTodo(text: string){
    setTodos([...todos, {id: Date.now(), text: text, done: false}])
    setInput('')
  }

  //Todo完了ステータス切替関数
  function toggleTodo(id: number){
    setTodos(todos.map(t =>
    t.id === id ? {...t,done: !t.done} : t
    ))
  }
```

### 実務での型
```jsx
```

### 落とし穴

### 説明できる状態
`t.id === id ? {...t, done: !t.done} : t`ここでは配列の後ろのdoneだけを上書き