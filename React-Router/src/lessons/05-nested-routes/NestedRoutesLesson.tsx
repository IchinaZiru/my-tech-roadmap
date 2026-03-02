// Lesson 05: Nested Routes
// docs/05-nested-routes.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] /settings を親ルートにする（Settings コンポーネントを作る）
//   [ ] Settings コンポーネントの中に <Outlet /> を置く
//   [ ] /settings/profile と /settings/notices を子ルートとして定義する
//   [ ] Settings コンポーネント内のリンクで子ルートに切り替えられる
//   [ ] 親コンポーネント（Settings のタイトルとリンク）が消えずに残る

import { MemoryRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

function Settings() {
  return (
    <div>
      <h3>設定</h3>
      {/* サブメニューの Link を作る */}
      <nav>
        {/* /settings/profile と /settings/notices へのリンク */}
        <Link to= "/settings/profile">プロフィール</Link>
        <Link to= "/settings/notices">通知</Link>
      </nav>
      {/* 子ルートがここに描画される */}
      <Outlet />
    </div>
  )
}

function Profile() {
  return <p>プロフィール設定</p>
}

function Notices() {
  return <p>通知設定</p>
}

export default function NestedRoutesLesson() {
  return (
    <div>
      <h2>Lesson 05: Nested Routes</h2>
      <MemoryRouter initialEntries={['/settings/profile']}>
        <Routes>
          {/* Settings を親ルートにして Profile と Notices を子ルートにする */}
          <Route path='/settings' element={<Settings />}   >
            <Route path='/settings/profile' element={<Profile />} />
            <Route path='/settings/notices' element={<Notices />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </div>
  )
}
