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
  const[errors, setErrors] = useState({
    name: '',
    email: '',
    agree: '',
  })
  const [submitted, setSubmitted] = useState(false)

  // 汎用ハンドラ（input name 属性でどのフィールドか判断）
  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as any
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // ページリロードを防ぐ
  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    const newErrors = { name: '', email: '', agree: '' }
    //名前の空白をバリデーションチェック
    if (!form.name){
      newErrors.name = '名前は必須です'
    }
    //メールの@が存在するかバリデーションチェック
    if (!form.email.includes("@")){
      newErrors.email = '有効なメールアドレスを入力してください'
    }
    //利用規約の同意をバリデーションチェック
    if (!form.agree){
      newErrors.agree = '利用規約に同意してください'
    }

    //エラーメッセージを設定
    setErrors(newErrors)

    //エラーが一つでもあれば送信しない
    if(newErrors.name || newErrors.email || newErrors.agree){
      return
    }
    // バリデーション → 送信処理
    setSubmitted(true)
  }
  return (
    <div>
      <h2>Lesson 09: フォーム</h2>
      {/* フォームをここに作る */}
      <form onSubmit={handleSubmit}>
        <input type='text' name="name" value={form.name} onChange={handleChange} placeholder='名前を入力してください'/>
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <input name="email" value={form.email} onChange={handleChange} placeholder='メールを入力してください' style={{ marginLeft: '10px' }}/>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <select name="role" value={form.role} onChange={handleChange} >
          <option value="frontend">フロントエンド</option>
          <option value="backend">バックエンド</option>
          <option value="fullstack">フルスタック</option>
        </select>
        <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} style={{ marginLeft: '10px' }}/>
        <label>利用規約に同意する</label>
        {errors.agree && <p style={{ color: 'red' }}>{errors.agree}</p>}
        <button type="submit">送信</button>
      </form>
      {submitted && <p>送信完了! 名前: {form.name}, メール: {form.email}, 役割: {form.role}</p>}
    </div>
  )
}
