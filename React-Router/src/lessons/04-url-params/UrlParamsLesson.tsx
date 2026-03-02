// Lesson 04: URL Params
// docs/04-url-params.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] / にユーザー一覧ページを作る（3人分）
//   [ ] /users/:userId にユーザー詳細ページを作る
//   [ ] useParams で :userId を取得して表示する
//   [ ] 一覧の各ユーザー名が詳細ページへの <Link> になっている

import { MemoryRouter, Routes, Route, Link, useParams } from 'react-router-dom'

const USERS = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Carol' },
]

function UserList() {
  return (
    <div>
      <h3>ユーザー一覧</h3>
      {/* USERS をループして各ユーザーへの Link を作る */}
    </div>
  )
}

function UserDetail() {
  // useParams で userId を取得する
  // USERS から該当ユーザーを探して表示する

  return (
    <div>
      <h3>ユーザー詳細</h3>
      {/* ID と名前を表示する */}
      {/* 一覧に戻る Link を置く */}
    </div>
  )
}

export default function UrlParamsLesson() {
  return (
    <div>
      <h2>Lesson 04: URL Params</h2>
      <MemoryRouter>
        <Routes>
          {/* ルートを定義する */}
        </Routes>
      </MemoryRouter>
    </div>
  )
}
