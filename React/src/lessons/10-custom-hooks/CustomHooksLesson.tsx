// Lesson 10: Custom Hooks（カスタムフック）
// docs/10-custom-hooks.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] useLocalStorage(key, initialValue) を作る
//       → リロードしても値が消えない state
//   [ ] useFetch(url) を作る
//       → { data, loading, error } を返す
//   [ ] 作ったカスタムフックをコンポーネントで使う

import { useState, useEffect } from 'react'

// ここにカスタムフックを定義する
// function useLocalStorage<T>(key: string, initialValue: T) { ... }
function useLocalStorage<T>(key: string, initialValue: T) {
  const[value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
})
useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value))
}, [key, value])
return [value, setValue]
}
// function useFetch<T>(url: string) { ... }
function useFetch(url:string){
  const [data, setData] = useState(null)
  const[loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
    .then(res => res.json())
    .then(json => {
      setData(json)
      setLoading(false)
    })
    .catch(err => {
    setError(err.message)
    setLoading(false)
  })

}, [url])
return {data, loading, error}
}

export default function CustomHooksLesson() {
  // ここで作ったカスタムフックを使う
  const [name, setName] = useLocalStorage('name', '')
  const { data, loading, error } = 
  useFetch('https://api.github.com/users/facebook')

  return (
    <div>
      <h2>Lesson 10: カスタムフック</h2>
      {/* useLocalStorage と useFetch の動作確認をここに作る */}
      <h1>[UseLocalStorage]</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <p>保存された名前: {name}</p>
      <h1>[UseFetch]</h1>
      {loading&& <p>読み込み中...</p>}
      {error && <p>エラー: {error}</p>}
      {data && <p>フォロワー数: {(data as any).followers}</p>}
    </div>
  )
}
