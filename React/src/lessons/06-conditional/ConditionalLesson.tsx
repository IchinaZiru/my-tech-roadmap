// Lesson 06: Conditional Rendering（条件付きレンダリング）
// docs/06-conditional.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] 三項演算子（条件 ? A : B）で2つの表示を切り替える
//   [ ] && 演算子で表示/非表示を切り替える
//   [ ] return null で何も表示しないコンポーネントを作る
//   [ ] ボタンで状態を変えて動作確認する

import { useState } from 'react'

function Alert({ message }: { message: string }) {
  if (!message) return null
  return <p>{message}</p>
}


export default function ConditionalLesson() {
  // ここに実装する
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState('')

  function handleToggleLogin() {
    setIsLoggedIn(prev => !prev)
    setMessage('')
  }

  //
  return (
    <div>
      <h2>Lesson 06: 条件付きレンダリング</h2>
      {/* 条件分岐のサンプルをここに作る */}
      <button onClick={handleToggleLogin}>
        {isLoggedIn ? 'ログアウト' : 'ログイン'}
      </button>
      {isLoggedIn && <p>ようこそ！</p>}
      {isLoggedIn && <button onClick={() => setMessage('成功しました!')}>成功メッセージを出す</button>}
      {isLoggedIn && <button onClick={() => setMessage('エラーが発生しました!')}>エラーメッセージを出す</button>}
      {isLoggedIn && <button onClick={() => setMessage('')}>消す</button>}
      <Alert message={message} />
    </div>
  )
}
