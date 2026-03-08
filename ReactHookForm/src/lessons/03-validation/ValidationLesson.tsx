// Lesson 03: validation（組み込みバリデーション）
// docs/03-validation.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] username: required, minLength: 2, maxLength: 20
//   [ ] email: required, pattern でメール形式チェック
//   [ ] age: required, min: 0, max: 120（数値型）
//   [ ] バリデーションルールを register の第2引数に渡す
//   ※ エラー表示は Lesson 04 でやる。今はコンソール確認でOK

import { useForm } from 'react-hook-form'
import { maxLength, minLength, required } from 'zod/v4-mini'

type FormData = {
  username: string
  email: string
  age: number
}

export default function ValidationLesson() {
  // useForm<FormData>() を呼び出す
  const { register, handleSubmit } = useForm<FormData>()

  const onsubmit = (data: FormData) => {
    console.log(data)
  } 

  return (
    <div>
      <h2>Lesson 03: validation</h2>
      {/* username, email, age のフォームを作る */}
      {/* register の第2引数にバリデーションルールを書く */}
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label>ユーザー名</label>
          <input
            type="text"
            {...register('username', {
              required: "ユーザー名は必須です",
              minLength: {
            value: 2,
            message: "ユーザー名は2文字以上でなければなりません"
          },
          maxLength: {
            value: 20,
            message: "ユーザー名は20文字以下でなければなりません"
          } 
        })}
        />
      </div>

      <div>
        <label>メールアドレス</label>
        <input 
        type="email"
        {...register('email', {
          required: "メールアドレスは必須です",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "有効なメールアドレスを入力してください"
          }
        }
        )}
        />
      </div>

      <div>
        <label>年齢</label>
        <input
          type="number"
          {...register('age', {
            required: "年齢は必須です",
            min: {
              value: 0,
              message: "年齢は0以上でなければなりません"
            },
            max: {
              value: 120,
              message: "年齢は120以下でなければなりません"
            },
            valueAsNumber: true
          })}
        />
      </div>

      <button type="submit">送信</button>
      </form>
    </div>
  )
}
