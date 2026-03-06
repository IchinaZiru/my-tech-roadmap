// Lesson 07: 数値バリデーション
// docs/07-number-validations.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] .min(n) / .max(n) で範囲を制限する
//   [ ] .int() で整数のみに制限する
//   [ ] .positive() / .negative() / .nonnegative() を試す
//   [ ] .multipleOf(n) で倍数チェックを試す
//   [ ] 小数点を渡して .int() が弾くことを確認する

import { useState } from 'react'
// import { z } from 'zod'

// TODO: 各スキーマを定義する
// const ageSchema = z.number().int().min(0).max(150)
// const priceSchema = z.number().positive().multipleOf(0.01)
// const scoreSchema = z.number().min(0).max(100)

export default function NumberValidationsLesson() {
  const [age, setAge] = useState('')
  const [price, setPrice] = useState('')
  const [score, setScore] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [successes, setSuccesses] = useState<Record<string, string>>({})

  function handleValidate() {
    const newErrors: Record<string, string> = {}
    const newSuccesses: Record<string, string> = {}

    // TODO: Number(age) を ageSchema で検証する
    // TODO: Number(price) を priceSchema で検証する
    // TODO: Number(score) を scoreSchema で検証する
    // safeParse を使って try/catch なしで検証する

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
        Lesson 07: 数値バリデーション
      </h2>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>年齢（整数 0〜150）</label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)} style={inputStyle} placeholder="例: 25" />
        {errors.age && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.age}</p>}
        {successes.age && <p style={{ color: '#22c55e', fontSize: 12 }}>{successes.age}</p>}
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>価格（正の数、0.01単位）</label>
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} style={inputStyle} placeholder="例: 1980.00" step="0.01" />
        {errors.price && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.price}</p>}
        {successes.price && <p style={{ color: '#22c55e', fontSize: 12 }}>{successes.price}</p>}
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>スコア（0〜100）</label>
        <input type="number" value={score} onChange={e => setScore(e.target.value)} style={inputStyle} placeholder="例: 85" />
        {errors.score && <p style={{ color: '#ef4444', fontSize: 12 }}>{errors.score}</p>}
        {successes.score && <p style={{ color: '#22c55e', fontSize: 12 }}>{successes.score}</p>}
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
