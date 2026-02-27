// Lesson 07: Lists（リストとkey）
// docs/07-lists.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] Todo配列を useState で持つ
//   [ ] .map() で配列を <li> に変換して表示する
//   [ ] 各 <li> に key={todo.id} を設定する
//   [ ] 入力フォームで Todo を追加できる
//   [ ] クリックで完了/未完了を切り替える（打ち消し線）
//   [ ] 残り件数を表示する

import { useState } from 'react'

const INITIAL_TODOS = [
  { id: 1, text: 'JSXを理解する',    done: false },
  { id: 2, text: 'useStateを覚える', done: false },
  { id: 3, text: 'useEffectを学ぶ',  done: false },
]

export default function ListsLesson() {
  const [todos, setTodos] = useState(INITIAL_TODOS)
  // ここに実装する

  return (
    <div>
      <h2>Lesson 07: リストとkey</h2>
      {/* Todo リストをここに作る */}
    </div>
  )
}
