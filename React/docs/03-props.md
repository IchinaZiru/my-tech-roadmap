# Lesson 03: Props

## このレッスンで学ぶこと

コンポーネントに「引数」を渡す仕組み。
親から子へデータを渡すことができる。HTMLの属性と同じ感覚で書く。
Props は読み取り専用（子が直接変更してはいけない）。

---

## 何を実装するか

`src/lessons/03-props/PropsLesson.jsx` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] Props を受け取るコンポーネントを作る（例：`UserCard({ name, role })`）
- [ ] 文字列・数値・真偽値の3種類のPropsを渡す
- [ ] 同じコンポーネントに**異なるPropsを渡して**3回表示する（カードリストなど）
- [ ] Props の値によって表示内容が変わるようにする（例：役割によって色を変える）

### 画面イメージ

```
[UserCard: 名前=田中, 役割=管理者, active=true]
[UserCard: 名前=鈴木, 役割=メンバー, active=true]
[UserCard: 名前=佐藤, 役割=ゲスト,  active=false]
```

---

## App.jsx への接続方法

```jsx
import PropsLesson from './lessons/03-props/PropsLesson'
{ label: '03 Props', Component: PropsLesson },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Props とは何か、1〜3行で -->
親から子に引数を渡す

### 最小実装
```jsx
//子
type CardProps = {
    name: string
    role: string
    activate?: boolean
}

export default function UseCard({name, role, activate}: CardProps) {
    return (
        <div>
            <h3>名前 = {name}</h3>
            <p>役割 = {role}</p>
            <p>activate = {activate ? 'true' : 'false'}</p>
        </div>
    )
}
//親
<UseCard name="田中" role="管理者" activate={true}></UseCard>
```

### 実務での型
```jsx
変数名はisActive?のように書くのが慣習
```

### 落とし穴
<!-- よくあるエラーと回避策 -->
関数の外側で変数を定義し、関数に引数として変数を書いたらxxx{xx, xx} : XXXXという風に書く
TypeScriptの型定義のところで?を付けるとオプショナル(省略可能)な引数になる->親コンポーネントで渡さなくてもいいpropsになる

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
Propsは親コンポーネントから子コンポーネントに引数を渡す方法
親コンポーネントは子コンポーネントの関数をimportしコンポーネント内に引数を渡した形で定義(TypeScriptの型定義)
子コンポーネントは関数外で定義した引数を関数内で呼び使用(:xxxも忘れずに)