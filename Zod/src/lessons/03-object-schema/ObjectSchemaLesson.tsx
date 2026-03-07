// Lesson 03: オブジェクトスキーマ
// docs/03-object-schema.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] z.object() でユーザースキーマ（name: string, age: number）を定義する
//   [ ] テキストエリアに JSON を入力して検証できるようにする
//   [ ] 正しいデータで成功を確認する
//   [ ] 必須フィールドが欠けているときのエラーを確認する
//   [ ] 型が間違っているときのエラーを確認する

import { useState } from 'react'
// import { z } from 'zod'

// TODO: ここにスキーマを定義する
// const userSchema = z.object({ ... })

export default function ObjectSchemaLesson() {
  const [input, setInput] = useState('{\n  "name": "Alice",\n  "age": 25\n}')
  const [result, setResult] = useState<string>('')
  const [isError, setIsError] = useState(false)

  function handleValidate() {
    try {
      const parsed = JSON.parse(input)

      // TODO: userSchema.parse(parsed) で検証する
      // 成功したら setResult(JSON.stringify(..., null, 2)) で表示する
      // 失敗したら catch でエラーメッセージを表示する

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
        Lesson 03: オブジェクトスキーマ
      </h2>

      <p style={{ marginBottom: 8, fontSize: 14, color: '#374151' }}>
        JSON を入力して検証する:
      </p>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={6}
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
