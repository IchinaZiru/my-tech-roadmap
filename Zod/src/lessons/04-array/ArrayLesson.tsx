// Lesson 04: 配列
// docs/04-array.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] z.array(z.string()) で文字列配列のスキーマを作る
//   [ ] z.array(z.number()) で数値配列のスキーマを作る
//   [ ] テキストエリアに JSON 配列を入力して検証する
//   [ ] 配列の中に間違った型が混じっているときのエラーを確認する
//   [ ] z.array(z.object({...})) でオブジェクト配列も試す

import { useState } from 'react'
// import { z } from 'zod'

// TODO: 文字列配列のスキーマを定義する
// const stringArraySchema = ...

// TODO: ユーザーオブジェクトの配列スキーマを定義する
// const usersSchema = ...

export default function ArrayLesson() {
  const [input, setInput] = useState('["Alice", "Bob", "Charlie"]')
  const [result, setResult] = useState<string>('')
  const [isError, setIsError] = useState(false)

  function handleValidate() {
    try {
      const parsed = JSON.parse(input)

      // TODO: stringArraySchema.parse(parsed) で検証する

      setResult(JSON.stringify(parsed, null, 2))
      setIsError(false)
    } catch (e) {
      setResult(e instanceof Error ? e.message : '不明なエラー')
      setIsError(true)
    }
  }

  return (
    <div style={{ maxWidth: 600 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Lesson 04: 配列
      </h2>

      <p style={{ marginBottom: 8, fontSize: 14, color: '#374151' }}>
        JSON 配列を入力して検証する:
      </p>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={5}
        style={{
          width: '100%',
          padding: 12,
          border: '1px solid #d1d5db',
          borderRadius: 8,
          fontFamily: 'monospace',
          fontSize: 13,
          marginBottom: 12,
        }}
      />

      <button
        onClick={handleValidate}
        style={{
          padding: '8px 20px',
          background: '#0ea5e9',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          fontSize: 14,
          marginBottom: 16,
        }}
      >
        検証する
      </button>

      {result && (
        <div style={{
          padding: 16,
          background: isError ? '#fef2f2' : '#f0fdf4',
          border: `1px solid ${isError ? '#fca5a5' : '#86efac'}`,
          borderRadius: 8,
          fontFamily: 'monospace',
          fontSize: 13,
          whiteSpace: 'pre-wrap',
        }}>
          {isError ? '❌ ' : '✅ '}{result}
        </div>
      )}
    </div>
  )
}
