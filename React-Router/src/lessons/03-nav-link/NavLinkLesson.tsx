// Lesson 03: NavLink
// docs/03-nav-link.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] <Link> を <NavLink> に置き換える
//   [ ] アクティブなリンクを太字にする（style に関数を渡す）
//   [ ] アクティブなリンクに下線を引く（className に関数を渡す）

import { MemoryRouter, Routes, Route, NavLink } from 'react-router-dom'

function Home() {
  return <p>こんにちは！ここは Home ページです。</p>
}

function About() {
  return <p>About ページです。</p>
}

function Contact() {
  return <p>Contact ページです。</p>
}

export default function NavLinkLesson() {
  return (
    <div>
      <h2>Lesson 03: NavLink</h2>
      <MemoryRouter>
        {/* NavLink を使ってナビゲーションを作る */}
        {/* isActive を使ってアクティブなリンクにスタイルを当てる */}

        <Routes>
          {/* ここにルートを定義する */}
        </Routes>
      </MemoryRouter>
    </div>
  )
}
