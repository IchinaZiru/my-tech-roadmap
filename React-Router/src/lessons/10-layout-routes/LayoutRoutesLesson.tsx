// Lesson 10: Layout Routes
// docs/10-layout-routes.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] Layout コンポーネントを作る（ヘッダー・フッター・<Outlet /> を含む）
//   [ ] path を持たない <Route element={<Layout />}> で全ページを囲む
//   [ ] Home / About / Contact の3ページを Layout の子ルートにする
//   [ ] ページを切り替えてもヘッダーとフッターが消えない

import { MemoryRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'

// Layout: ヘッダー・フッターと <Outlet /> を持つ共通レイアウト
function Layout() {
  return (
    <div>
      <header style={{ background: '#1e293b', color: 'white', padding: '12px 24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
        <strong>My App</strong>
        {/* NavLink でナビゲーションを作る */}
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </header>
      <main style={{ padding: '24px' }}>
        {/* 子ルートのコンポーネントがここに描画される */}
        <Outlet />
      </main>
      <footer style={{ borderTop: '1px solid #e2e8f0', padding: '12px 24px', color: '#64748b', fontSize: '14px' }}>
        © 2025 My App
      </footer>
    </div>
  )
}

function Home() {
  return <p>Home ページの内容</p>
}

function About() {
  return <p>About ページの内容</p>
}

function Contact() {
  return <p>Contact ページの内容</p>
}

export default function LayoutRoutesLesson() {
  return (
    <div>
      <h2>Lesson 10: Layout Routes</h2>
      <MemoryRouter>
        <Routes>
          {/* path を持たない Route で Layout を定義し、その中に子ルートを置く */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </div>
  )
}
