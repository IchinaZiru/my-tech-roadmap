# Lesson 01: JSX

## このレッスンで学ぶこと

JSX は「JavaScript の中に HTML のような見た目で書ける記法」。
Vite がビルド時に通常の JavaScript に変換してくれる。
React コードのほぼ全てが JSX で書かれるため、最初に慣れておく。

---

## 何を実装するか

`src/lessons/01-jsx/JsxLesson.jsx` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] 変数を `{}` で埋め込む（文字列・数値・式）
- [ ] `className` でCSSクラスを指定する（`class` ではない）
- [ ] `style={{ }}` でインラインスタイルを書く（オブジェクト形式）
- [ ] 複数の要素を1つのルート要素で囲む

### 画面イメージ

```
Lesson 01: JSX

こんにちは、[変数の値]！
青色のテキスト（styleで色を指定）
ハイライト付きテキスト（classNameでスタイル）
```

---

## App.jsx への接続方法

実装後、`src/App.jsx` を以下のように変更する：

```jsx
// コメントを外す
import JsxLesson from './lessons/01-jsx/JsxLesson'

// Component: null を変更する
{ label: '01 JSX', Component: JsxLesson },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- JSXとは何か、1〜3行で書く -->
Java Script Xml: JavaScript内にHTMLのような見た目で記述ができるようになる拡張

tsxの場合はTypeScript + JSX

### 最小実装
```tsx
export default function JsxLesson() {
  // ここに実装する
  const name = "おにぎり";
  const price = 150;

  return (
    <div>
      <h2>Lesson 01: JSX</h2>
      {/* ここにコードを追加する */}
      <h1
      style ={{
        color: "blue",
        backgroundColor: "lightblue",
        padding: "10px",
        borderRadius: "5px",
        fontSize:"24px"
      }}
      >
        Hello, {name}!</h1>
      <p className="highlight">価格: ¥{price}</p>
    </div>
  )
}
```

### 実務での型
```tsx
//変数を定義する
const name = "おにぎり";

//定義した変数を{}で埋め込む
<h1>Hello,{name}</h1>
```

### 落とし穴
<!-- よくあるエラーと回避策 -->
TypeScriptは型推論があるからstringやnumberなどを定義しなくても自動で判断してくれる(実務だと推論に任せるのが慣習)

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
始めに`const xxx`で型を定義し、return以降のHTML記述の中に`{xxx}`で利用することができる。
CSSラベルを割り当てるときは`class = test`ではなく、`className = test`と書き、ルートのApp.cssで
```css
.test {
  color: #e11d48;
  font-weight: bold;
}
```
と書きcssを当てられる。
tsx及びjsxでオブジェクトを渡すときには`{}`で囲む
`{}`で書かれたオブジェクトを渡すときはさらに`{}`で囲む(style等)

```tsx
// 1. JS 側のオブジェクト
const style = { color: "red" };

// 2. JSX に渡すときは、{} で囲む
<div style={style}>
// あるいは一気に書く
<div style={{ color: "red" }}>

```