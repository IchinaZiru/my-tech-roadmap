// Lesson 06: Not Found
// docs/06-not-found.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] path="/" と path="/about" の2ページを用意する
//   [ ] path="*" で <NotFound /> コンポーネントを表示する
//   [ ] initialEntries={['/unknown']} にすると NotFound ページが出る
//   [ ] NotFound ページから Home へ戻る <Link> を置く

import { MemoryRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <p>Home ページ</p>
}

function About() {
  return <p>About ページ</p>
}

function NotFound() {
  return (
    <div>
      {/* 404 メッセージと Home への Link を作る */}
      <p>404 - ページが見つかりません</p>
      <Link to ="/">Home に戻る</Link>
    </div>
  )
}

export default function NotFoundLesson() {
  return (
    <div>
      <h2>Lesson 06: Not Found</h2>
      {/* initialEntries を ['/unknown'] に変えて 404 を確認する */}
      <MemoryRouter initialEntries={['/unknown']}>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          {/* ルートを定義する。path="*" を最後に置く */}
          <Route path="/" element={<Home />} />
          <Route path ="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    </div>
  )
}
