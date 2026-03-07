// Lesson 02: register
// docs/02-register.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] FormData 型（username, email, message）を定義する
//   [ ] useForm<FormData>() で型を付ける
//   [ ] 3つのフィールドをそれぞれ register で登録する
//   [ ] onSubmit で送信データを画面に表示する（JSON.stringify）
//   [ ] register が返すオブジェクト（ref, name, onChange, onBlur）をコンソールで確認する

// import { useForm } from 'react-hook-form'

// type FormData = {
//   username: string
//   email: string
//   message: string
// }

export default function RegisterLesson() {
  // useForm<FormData>() を呼び出す

  return (
    <div>
      <h2>Lesson 02: register</h2>
      {/* username, email, message の3フィールドを持つフォームを作る */}
      {/* 送信後に入力データを画面に表示する */}
    </div>
  )
}
