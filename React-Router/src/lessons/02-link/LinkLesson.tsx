// Lesson 02: Link
// docs/02-link.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] <MemoryRouter> で全体を囲む
//   [ ] Home / About / Contact の3ページを <Route> で定義する
//   [ ] 各ページへの <Link> を含むナビゲーションを作る
//   [ ] リンクをクリックするとページが切り替わる

import { MemoryRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <p>こんにちは！ここは Home ページです。</p>
}

function About() {
  return <p>About ページです。</p>
}

function Contact() {
  return <p>Contact ページです。</p>
}

export default function LinkLesson() {
  return (
    <div>
      <h2>Lesson 02: Link</h2>
      <MemoryRouter>
        {/* ナビゲーション（Link を使う）をここに作る */}
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
        {/* Routes > Route でページを定義する */}
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/about" element={<About />} />
          <Route path ="/contact" element={<Contact />} />
        </Routes>
      </MemoryRouter>
    </div>
  )
}
