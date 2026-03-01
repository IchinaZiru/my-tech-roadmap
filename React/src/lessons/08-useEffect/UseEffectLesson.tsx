// Lesson 08: useEffect
// docs/08-useEffect.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] タイマー: setInterval で毎秒カウントアップ
//   [ ] タイマー: クリーンアップで clearInterval（別レッスンに移ると止まる）
//   [ ] APIフェッチ: https://api.github.com/users/facebook を取得
//   [ ] APIフェッチ: ローディング中は「読み込み中...」を表示
//   [ ] APIフェッチ: input でユーザー名を変えると再取得される

import { useState, useEffect } from 'react'

export default function UseEffectLesson() {
  // ここに実装する
  const[count, setCount] = useState(0)
  const[username,setUsername] = useState('facebook')
  const[data,setData] = useState<{name: string, followers: number} | null>(null)
  const[loading, setLoading] = useState(false)

  //タイマーエフェクト
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // APIフェッチエフェクト
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => {
      setData(json)
      setLoading(false)
    })
  }, [username]);

  return (
    <div>
      <h2>Lesson 08: useEffect</h2>
      {/* タイマーとAPIフェッチをここに作る */}
      <p style={{ backgroundColor: '#dadbde' }}>タイマー</p>
      <p>カウント: {count}</p>
      <p style={{ backgroundColor: '#d9d9d9' }}>APIフェッチ</p>
      <input type="text" value = {username} onChange={e => {
        setUsername(e.target.value)
      }} />
      {loading && <p> 読み込み中...</p>}
      {data && <p>ユーザー名 : {data.name},フォロワー数 : {data.followers}</p>}
    </div>
  )
}
