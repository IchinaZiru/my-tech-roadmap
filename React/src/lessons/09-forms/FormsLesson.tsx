// Lesson 09: Forms（フォーム）
// docs/09-forms.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] テキスト入力（名前・メール）
//   [ ] セレクトボックス（役割）
//   [ ] チェックボックス（利用規約同意）
//   [ ] バリデーション（名前空、メール形式、チェック未了）
//   [ ] e.preventDefault() でリロードを防ぐ
//   [ ] 送信後に入力内容を表示する

import { useState } from 'react'

export default function FormsLesson() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'frontend',
    agree: false,
  })
  // ここに実装する

  return (
    <div>
      <h2>Lesson 09: フォーム</h2>
      {/* フォームをここに作る */}
    </div>
  )
}
