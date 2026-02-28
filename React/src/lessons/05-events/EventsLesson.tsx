// Lesson 05: Events（イベント）
// docs/05-events.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] onClick — ボタンクリックで何かが変わる
//   [ ] onChange — テキスト入力をリアルタイムで表示する
//   [ ] onKeyDown — Enter キーを押したときだけ処理する
//   [ ] e.target.value で入力値を取得する

import { useState } from 'react'

export default function EventsLesson() {
  // ここに実装する
  const[text, setText]  = useState('hello');

  //テキスト入力のイベントハンドラ
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setText(e.target.value);
  }

  //Enterキーのイベントハンドラ
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
    if(e.key === `Enter`){
      setText(e.currentTarget.value);
    }
  }
  
  return (
    <div>
      <h2>Lesson 05: Events</h2>
      {/* イベントハンドラのサンプルをここに作る */}
      <button onClick={() => setText('')}>クリックしてみて</button>
      <br />
      <input value={text} onChange={handleChange} placeholder='テキスト入力'/>
      <p>入力中のテキスト: {text}</p>
      <input onKeyDown={handleKeyDown} placeholder='Enterで確定'/>
      <p>確定した文字 : {text}</p>
      <button onClick={() => alert('You clicked me!')}>アラート</button>
    </div>
  )
}
