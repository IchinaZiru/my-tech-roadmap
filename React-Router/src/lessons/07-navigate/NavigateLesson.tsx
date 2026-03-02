// Lesson 07: Navigate
// docs/07-navigate.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] / に名前を入力するフォームページを作る
//   [ ] フォームを送信すると /result ページに遷移する
//   [ ] /result ページに入力した名前を表示する（state で渡す）
//   [ ] /result ページの「戻る」ボタンで navigate(-1) を使う
import { useState } from 'react'
import { MemoryRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'

function InputForm() {
  // useNavigate でナビゲート関数を取得する
  // input の状態を useState で管理する
  // フォーム送信時に navigate('/result', { state: { name } }) を呼ぶ
  const[name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/result', { state: { name } })
  }

  return (
    <div>
      <h3>名前を入力してください</h3>
      {/* input と送信ボタンを作る */}
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='名前を入力してください'/>
      <button onClick={() => handleSubmit()}>送信</button>
    </div>
  )
}

function Result() {
  // useLocation で state を受け取る
  // useNavigate で「戻る」ボタンを実装する
  const location = useLocation()
  const navigate = useNavigate()

  const name = location.state?.name || '名無し'

  return (
    <div>
      {/* 名前を表示する */}
      <p>こんにちは、{name}さん！</p>
      {/* 「戻る」ボタンを作る */}
      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  )
}

export default function NavigateLesson() {
  return (
    <div>
      <h2>Lesson 07: Navigate</h2>
      <MemoryRouter>
        <Routes>
          {/* フォームページと結果ページのルートを定義する */}
          <Route path='/' element={<InputForm />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </MemoryRouter>
    </div>
  )
}
