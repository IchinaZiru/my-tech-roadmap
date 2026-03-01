// Lesson 09: Protected Routes
// docs/09-protected-routes.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] isLoggedIn を useState で管理する（初期値: false）
//   [ ] /login に「ログイン」ボタンを置く（クリックで isLoggedIn が true になる）
//   [ ] /dashboard を認証が必要なページにする
//   [ ] RequireAuth コンポーネントを作る（未認証なら /login にリダイレクト）
//   [ ] ログイン前に /dashboard にアクセスすると /login に飛ばされる
//   [ ] ログイン後は /dashboard が表示される

import { useState } from 'react'
import { MemoryRouter, Routes, Route, Navigate, Outlet, Link, useNavigate } from 'react-router-dom'

// RequireAuth: 未認証なら /login にリダイレクトする
// props で isLoggedIn を受け取る
function RequireAuth({ isLoggedIn }: { isLoggedIn: boolean }) {
  // isLoggedIn が false なら <Navigate to="/login" replace /> を返す
  // true なら <Outlet /> を返す
  return <></>
}

function LoginPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div>
      <h3>ログインしてください</h3>
      {/* ログインボタン: クリックで onLogin を呼ぶ、その後 /dashboard に navigate する */}
    </div>
  )
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <div>
      <h3>ダッシュボード</h3>
      <p>ようこそ！</p>
      {/* ログアウトボタン: クリックで onLogout を呼ぶ */}
    </div>
  )
}

export default function ProtectedRoutesLesson() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <h2>Lesson 09: Protected Routes</h2>
      <p>現在: {isLoggedIn ? 'ログイン中' : '未ログイン'}</p>
      {/* initialEntries={['/dashboard']} に変えると /login にリダイレクトされる */}
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
          />
          {/* RequireAuth で /dashboard を保護する */}
        </Routes>
      </MemoryRouter>
    </div>
  )
}
