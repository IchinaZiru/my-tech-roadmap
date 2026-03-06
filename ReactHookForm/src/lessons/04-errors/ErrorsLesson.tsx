// Lesson 04: errors（エラーメッセージの表示）
// docs/04-errors.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] formState.errors を useForm から取り出す
//   [ ] username のエラーメッセージを input の下に表示する
//   [ ] email のエラーメッセージを input の下に表示する
//   [ ] age のエラーメッセージを input の下に表示する
//   [ ] エラー文字を赤色にする（インラインスタイル）
//   [ ] バリデーション通過後は送信データを画面に表示する

// import { useForm } from 'react-hook-form'

// type FormData = {
//   username: string
//   email: string
//   age: number
// }

export default function ErrorsLesson() {
  // useForm<FormData>() から formState: { errors } も取り出す

  return (
    <div>
      <h2>Lesson 04: errors</h2>
      {/* Lesson 03 のフォームにエラーメッセージ表示を追加する */}
      {/* errors.username?.message を input の下に表示する */}
    </div>
  )
}
