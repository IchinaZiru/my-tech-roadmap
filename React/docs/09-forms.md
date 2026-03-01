# Lesson 09: Forms（フォーム）

## このレッスンで学ぶこと

フォームの入力値を React の state で管理する「制御コンポーネント」パターン。
input の `value` を state に束縛することで、React がフォームの唯一の管理者になる。
Lesson 04〜06 の useState・Events・Conditional の総合演習。

---

## 何を実装するか

`src/lessons/09-forms/FormsLesson.jsx` にバリデーション付きフォームを作る。

### 実装チェックリスト

**フォームのフィールド**
- [ ] テキスト入力（名前）
- [ ] テキスト入力（メールアドレス）
- [ ] セレクトボックス（役割: フロントエンド/バックエンド/フルスタック）
- [ ] チェックボックス（利用規約に同意する）

**バリデーション**
- [ ] 名前が空のときエラーメッセージを表示する
- [ ] メールに `@` が含まれていないときエラーを表示する
- [ ] チェックボックスが未チェックのときエラーを表示する

**送信後**
- [ ] `e.preventDefault()` でページリロードを防ぐ
- [ ] バリデーション通過後に送信内容を画面に表示する

### 画面イメージ

```
Lesson 09: フォーム

名前    [__________]  ← 空のとき「名前は必須です」
メール  [__________]  ← @なしのとき「有効なメールを入力してください」
役割    [▼ フロントエンド]
        [ ] 利用規約に同意する  ← 未チェックのとき「同意が必要です」

[送信]

↓ 送信後
送信完了！
名前: 田中
メール: tanaka@example.com
...
```

---

## ヒント

```jsx
// 全フィールドを1つのstateで管理する
const [form, setForm] = useState({ name: '', email: '', role: 'frontend', agree: false })

// 汎用ハンドラ（input name 属性でどのフィールドか判断）
const handleChange = (e) => {
  const { name, value, type, checked } = e.target
  setForm(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }))
}

// フォームのsubmit
<form onSubmit={handleSubmit}>
  <button type="submit">送信</button>
</form>

// ページリロードを防ぐ
const handleSubmit = (e) => {
  e.preventDefault()
  // バリデーション → 送信処理
}
```

---

## App.jsx への接続方法

```jsx
import FormsLesson from './lessons/09-forms/FormsLesson'
{ label: '09 Forms', Component: FormsLesson },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
`{xxx.xxx}`で変数の特定の変数に触れる
### 最小実装
```tsx

```

### 実務での型
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  // 全エラーを一度計算する
  const newErrors = { name: '', email: '', agree: '' }
  if (!form.name) newErrors.name = '名前は必須です'
  if (!form.email.includes('@')) newErrors.email = '有効なメールを入力してください'
  if (!form.agree) newErrors.agree = '同意が必要です'

  setErrors(newErrors)  // エラーをstateに保存

  // エラーが1つでもあれば送信しない
  if (newErrors.name || newErrors.email || newErrors.agree) return

  setSubmitted(true)
}
```

### 落とし穴
汎用ハンドラはe.target.nameでどのフィールドか判断している為、input属性に`name`を入れ忘れないようにする
`<form>`はデフォルトでページをリロードしてしまうので`e.preventDefault()` を書いて、デフォルト動作をキャンセルする

### 説明できる状態
各項目のフォームとエラーと提出できたかをstateで管理
提出ハンドラを作ってエラー状態などを設定
提出できた場合にのみ提出できたメッセージを送信
