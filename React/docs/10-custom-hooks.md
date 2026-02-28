# Lesson 10: Custom Hooks（カスタムフック）

## このレッスンで学ぶこと

複数のコンポーネントで使いたいロジック（state + effect）を関数として切り出す仕組み。
`use` で始まる関数の中で `useState` や `useEffect` を使うことができる。
Lesson 08 の fetch ロジックを再利用できる形にするのがゴール。

---

## 何を実装するか

`src/lessons/10-custom-hooks/CustomHooksLesson.jsx` に以下の2つのカスタムフックを作る。

### 実装チェックリスト

**① `useLocalStorage(key, initialValue)`**
- [ ] `localStorage` と同期する state を返すカスタムフック
- [ ] テキストを入力してページをリロードしても値が消えないことを確認する

**② `useFetch(url)`**
- [ ] Lesson 08 の fetch ロジックをカスタムフックに切り出す
- [ ] `{ data, loading, error }` の3つを返す
- [ ] コンポーネント側では `useFetch(url)` を呼ぶだけでデータが取れる

### 画面イメージ

```
Lesson 10: カスタムフック

[useLocalStorage]
名前: [____________]  ← リロードしても残る
保存された名前: 田中

──────────
[useFetch]
フォロワー数: 123456  ← GitHub APIから取得
```

---

## ヒント

```jsx
// カスタムフックの作り方（useで始まる関数にするだけ）
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]  // useState と同じ形で返す
}

// 使い方
const [name, setName] = useLocalStorage('my-name', '')
```

```jsx
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  // ... fetch処理

  return { data, loading }
}

// 使い方（Lesson08のコードがすっきりする）
const { data, loading } = useFetch('https://api.github.com/users/facebook')
```

### 落とし穴：名前は必ず `use` で始める

```jsx
// NG: Reactのフックルールが適用されない
function fetchData(url) { ... }

// OK
function useFetchData(url) { ... }
```

---

## App.jsx への接続方法

```jsx
import CustomHooksLesson from './lessons/10-custom-hooks/CustomHooksLesson'
{ label: '10 Custom Hooks', Component: CustomHooksLesson },
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
