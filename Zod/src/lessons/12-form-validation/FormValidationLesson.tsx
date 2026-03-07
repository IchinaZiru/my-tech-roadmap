// Lesson 12: フォームバリデーション（実践）
// docs/12-form-validation.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] 登録フォーム（名前・メール・パスワード・年齢）のスキーマを定義する
//   [ ] .refine() でパスワード確認フィールドの一致チェックを実装する
//   [ ] 各フィールドのエラーをリアルタイムまたは送信時に表示する
//   [ ] 送信成功時に確認メッセージを表示する
//   [ ] フォームの状態（入力値・エラー・送信済み）を useState で管理する

import { useState } from 'react'
// import { z } from 'zod'

// TODO: 登録フォームのスキーマを定義する
// const registerSchema = z.object({
//   name: z.string().min(1, "名前は必須です"),
//   email: z.string().email("正しいメールアドレスを入力してください"),
//   password: z.string().min(8, "パスワードは8文字以上にしてください"),
//   confirmPassword: z.string(),
//   age: z.number().int().min(18, "18歳以上のみ登録できます"),
// }).refine(
//   (data) => data.password === data.confirmPassword,
//   { message: "パスワードが一致しません", path: ["confirmPassword"] }
// )
//
// type RegisterForm = z.infer<typeof registerSchema>

type FormErrors = Record<string, string>

export default function FormValidationLesson() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // TODO: form データ（age は Number() で変換）を registerSchema で safeParse する
    // エラーがあれば errors にセット（path[0] をキーにする）
    // 成功したら setSubmitted(true)

    setErrors({ _: 'まだ実装されていません' })
  }

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 14,
    marginBottom: 4,
  }

  if (submitted) {
    return (
      <div style={{ maxWidth: 500 }}>
        <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
          Lesson 12: フォームバリデーション
        </h2>
        <div style={{ padding: 24, background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 12, textAlign: 'center' }}>
          <p style={{ fontSize: 20, color: '#16a34a', fontWeight: 600 }}>✅ 登録完了！</p>
          <p style={{ color: '#374151', marginTop: 8 }}>ようこそ、{form.name} さん！</p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', password: '', confirmPassword: '', age: '' }); setErrors({}) }}
            style={{ marginTop: 16, padding: '8px 20px', background: '#0ea5e9', color: '#fff', border: 'none', borderRadius: 6 }}
          >
            もう一度試す
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 500 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Lesson 12: フォームバリデーション
      </h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600 }}>名前</label>
          <input name="name" value={form.name} onChange={handleChange} style={inputStyle} placeholder="Alice" />
          {errors.name && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.name}</p>}
        </div>

        <div>
          <label style={{ fontSize: 13, fontWeight: 600 }}>メールアドレス</label>
          <input name="email" value={form.email} onChange={handleChange} style={inputStyle} placeholder="alice@example.com" />
          {errors.email && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.email}</p>}
        </div>

        <div>
          <label style={{ fontSize: 13, fontWeight: 600 }}>パスワード（8文字以上）</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} style={inputStyle} />
          {errors.password && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.password}</p>}
        </div>

        <div>
          <label style={{ fontSize: 13, fontWeight: 600 }}>パスワード（確認）</label>
          <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} style={inputStyle} />
          {errors.confirmPassword && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.confirmPassword}</p>}
        </div>

        <div>
          <label style={{ fontSize: 13, fontWeight: 600 }}>年齢（18歳以上）</label>
          <input name="age" type="number" value={form.age} onChange={handleChange} style={inputStyle} placeholder="25" />
          {errors.age && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.age}</p>}
        </div>

        {errors._ && <p style={{ color: '#ef4444', fontSize: 13 }}>{errors._}</p>}

        <button
          type="submit"
          style={{
            padding: '10px 24px',
            background: '#0ea5e9',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          登録する
        </button>
      </form>
    </div>
  )
}
