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

import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  username: string
  email: string
  age: number
}

export default function ErrorsLesson() {
  // useForm<FormData>() から formState: { errors } も取り出す
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)

  const onsubmit = (data: FormData) => {
    console.log(data)
    setSubmittedData(data)
  }

  return (
    <div>
      <h2>Lesson 04: errors</h2>
      {/* Lesson 03 のフォームにエラーメッセージ表示を追加する */}
      {/* errors.username?.message を input の下に表示する */}
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
        {errors.username && (
          <p style={{ color: 'red', fontSize: '0.8rem' }}>
            {errors.username.message}
          </p>
        )}
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
        {errors.email && (
          <p style={{ color: 'red', fontSize: '0.8rem' }}>
            {errors.email.message}
          </p>
        )}
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
        {errors.age && (
          <p style={{ color: 'red', fontSize: '0.8rem' }}>
            {errors.age.message}
          </p>
        )}
      </div>

      <button type="submit">送信</button>
      </form>
      {submittedData && (
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      )}
      </div>
  )
}
