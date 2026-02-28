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

type Todo = {
  id: number
  text: string
  done: boolean
}

const INITIAL_TODOS: Todo[] = [
  { id: 1, text: 'JSXを理解する',    done: false },
  { id: 2, text: 'useStateを覚える', done: false },
  { id: 3, text: 'useEffectを学ぶ',  done: false },
]

export default function ListsLesson() {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS)
  //Todo 残り件数計算
  const unfinishedCount : number = todos.filter(t => !t.done).length
  // ここに実装する
  //input管理
  const [input, setInput] = useState('')

  //Todo追加関数
  function addTodo(text: string){
    setTodos([...todos, {id: Date.now(), text: text, done: false}])
    setInput('')
  }

  //Todo完了ステータス切替関数
  function toggleTodo(id: number){
    setTodos(todos.map(t =>
    t.id === id ? {...t, done: !t.done} : t
    ))
  }



  return (
    <div>
      <h2>Lesson 07: リストとkey</h2>
      {/* Todo リストをここに作る */}
      <input type ="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Todoを入力" />
      <button onClick={() => addTodo(input)}>追加</button>

      {todos.map(todo => (
        <li key={todo.id}
        onClick={() => toggleTodo(todo.id)}
        style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
          {todo.text}
        </li>
        
      ))}
      <p> 残り件数 : {unfinishedCount}</p>
    </div>
  )
}
