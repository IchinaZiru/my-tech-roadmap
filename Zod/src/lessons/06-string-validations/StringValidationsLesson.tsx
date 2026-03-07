// Lesson 06: 文字列バリデーション
// docs/06-string-validations.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] .min(n) で最小文字数を制限する
//   [ ] .max(n) で最大文字数を制限する
//   [ ] .email() でメールアドレス形式を検証する
//   [ ] .url() でURL形式を検証する
//   [ ] .startsWith() / .endsWith() を試す
//   [ ] カスタムエラーメッセージを設定する（第2引数）

import { useState } from 'react'
// import { z } from 'zod'

// TODO: バリデーションルールつきのスキーマを定義する
// const usernameSchema = z.string().min(3).max(20)
// const emailSchema = z.string().email()
// const urlSchema = z.string().url()

export default function StringValidationsLesson() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [url, setUrl] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [successes, setSuccesses] = useState<Record<string, string>>({})

  function handleValidate() {
    const newErrors: Record<string, string> = {}
    const newSuccesses: Record<string, string> = {}

    // TODO: username を usernameSchema で検証する
    // TODO: email を emailSchema で検証する
    // TODO: url を urlSchema で検証する
    // safeParse を使うとエラーでもクラッシュしない（Lesson 08 で詳しく学ぶ）

    setErrors(newErrors)
    setSuccesses(newSuccesses)
  }

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 14,
    marginBottom: 4,
  }

  return (
    <div style={{ maxWidth: 500 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Lesson 06: 文字列バリデーション
      </h2>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>ユーザー名（3〜20文字）</label>
        <input value={username} onChange={e => setUsername(e.target.value)} style={inputStyle} placeholder="例: alice_123" />
        {errors.username && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.username}</p>}
        {successes.username && <p style={{ color: '#22c55e', fontSize: 12 }}>{successes.username}</p>}
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>メールアドレス</label>
        <input value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} placeholder="例: alice@example.com" />
        {errors.email && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.email}</p>}
        {successes.email && <p style={{ color: '#22c55e', fontSize: 12 }}>{successes.email}</p>}
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>URL</label>
        <input value={url} onChange={e => setUrl(e.target.value)} style={inputStyle} placeholder="例: https://example.com" />
        {errors.url && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.url}</p>}
        {successes.url && <p style={{ color: '#22c55e', fontSize: 12 }}>{successes.url}</p>}
      </div>

      <button
        onClick={handleValidate}
        style={{
          padding: '8px 20px',
          background: '#0ea5e9',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          fontSize: 14,
        }}
      >
        検証する
      </button>
    </div>
  )
}
