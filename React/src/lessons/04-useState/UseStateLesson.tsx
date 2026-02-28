// Lesson 04: useState
// docs/04-useState.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] useState(0) でカウンターを作る
//   [ ] ボタンで増やす・減らす・リセットができる
//   [ ] useState(true) でテキストの表示/非表示を切り替える（おまけ）

import { useState } from 'react'

export default function UseStateLesson() {
  // ここに useState を使った実装を追加する
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  function handleClick() {
    setCount(count + 1)
  }

  function handleIncrement() {
    setCount(count => count + 1)
  }
  function handleDecrement() {
    setCount(count - 1)
  }

  function handleReset() {
    setCount(0)
  }

  function toggleVisibility() {
    setIsVisible(!isVisible)
  }

  return (
    <div>
      <h2>Lesson 04: useState</h2>
      {/* カウンターUIをここに作る */}
      {isVisible && <p>カウンター: <span className='counter'>{ count }</span></p>}
      <button onClick={handleClick}>
        増やす
      </button>
      <button onClick={() =>{
        handleIncrement();
        handleIncrement();
        handleIncrement();
      }}
      >
        3増やす
      </button>
      <button onClick={handleReset}>
        リセット
      </button>
      <button onClick={handleDecrement}>
        減らす
      </button>
      <br/>
      <button onClick={toggleVisibility}>
        {isVisible ? 'テキストを非表示にする' : 'テキストを表示する'}
      </button>
</div>
  )
}
