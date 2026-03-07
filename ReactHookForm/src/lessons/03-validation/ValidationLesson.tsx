// Lesson 03: validation（組み込みバリデーション）
// docs/03-validation.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] username: required, minLength: 2, maxLength: 20
//   [ ] email: required, pattern でメール形式チェック
//   [ ] age: required, min: 0, max: 120（数値型）
//   [ ] バリデーションルールを register の第2引数に渡す
//   ※ エラー表示は Lesson 04 でやる。今はコンソール確認でOK

// import { useForm } from 'react-hook-form'

// type FormData = {
//   username: string
//   email: string
//   age: number
// }

export default function ValidationLesson() {
  // useForm<FormData>() を呼び出す

  return (
    <div>
      <h2>Lesson 03: validation</h2>
      {/* username, email, age のフォームを作る */}
      {/* register の第2引数にバリデーションルールを書く */}
    </div>
  )
}
