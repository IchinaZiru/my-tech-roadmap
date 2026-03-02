// Lesson 01: Hello Router
// docs/01-hello-router.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] <MemoryRouter> で全体を囲む
//   [ ] <Routes> を <MemoryRouter> の中に置く
//   [ ] path="/" に <Home /> コンポーネントを対応させる
//   [ ] path="/about" に <About /> コンポーネントを対応させる
//   [ ] initialEntries={['/about']} に変えると About ページが表示される

import { MemoryRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return <p>こんにちは！ここは Home ページです。</p>
}

function About() {
  return <p>React Router へようこそ！ここは About ページです。</p>
}

export default function HelloRouterLesson() {
  return (
    <div>
      <h2>Lesson 01: Hello Router</h2>
      {/* MemoryRouter > Routes > Route の3層構造を作る */}
    </div>
  )
}
