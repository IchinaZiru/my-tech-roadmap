// Lesson 08: safeParse とエラーハンドリング
// docs/08-safe-parse-errors.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] .safeParse() が { success: true, data } か { success: false, error } を返すことを確認する
//   [ ] result.error.issues で全エラーの配列を取得する
//   [ ] result.error.issues[0].message でエラーメッセージを取り出す
//   [ ] result.error.issues[0].path でエラーが発生したフィールドのパスを取り出す
//   [ ] .parse() と .safeParse() の使い分けを説明できる

import { useState } from 'react'
// import { z } from 'zod'

// TODO: 複数フィールドを持つスキーマを定義する（エラーが複数でる状況を作る）
// const formSchema = z.object({
//   name: z.string().min(1),
//   email: z.string().email(),
//   age: z.number().int().positive(),
// })

type IssueDisplay = { path: string; message: string }

export default function SafeParseErrorsLesson() {
  const [input, setInput] = useState('{\n  "name": "",\n  "email": "not-an-email",\n  "age": -5\n}')
  const [success, setSuccess] = useState<boolean | null>(null)
  const [data, setData] = useState<string>('')
  const [issues, setIssues] = useState<IssueDisplay[]>([])

  function handleParse() {
    try {
      const parsed = JSON.parse(input)

      // TODO: formSchema.safeParse(parsed) で検証する
      // result.success が true なら data を表示
      // result.success が false なら result.error.issues からエラー情報を取り出す

      setSuccess(null)
      setData('')
      setIssues([{ path: '?', message: 'まだ実装されていません' }])
    } catch {
      setSuccess(false)
      setIssues([{ path: 'JSON', message: 'JSONのパースに失敗しました' }])
    }
  }

  return (
    <div style={{ maxWidth: 600 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Lesson 08: safeParse とエラーハンドリング
      </h2>

      <p style={{ marginBottom: 8, fontSize: 14, color: '#374151' }}>
        意図的に間違ったデータを入力してエラーを確認する:
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
        onClick={handleParse}
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
        safeParse する
      </button>

      {success === true && (
        <div style={{ padding: 16, background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 8 }}>
          <p style={{ color: '#16a34a', fontWeight: 600 }}>✅ 検証成功</p>
          <pre style={{ fontFamily: 'monospace', fontSize: 13, marginTop: 8 }}>{data}</pre>
        </div>
      )}

      {success === false && issues.length > 0 && (
        <div style={{ padding: 16, background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 8 }}>
          <p style={{ color: '#dc2626', fontWeight: 600, marginBottom: 8 }}>❌ 検証失敗（{issues.length}件のエラー）</p>
          {issues.map((issue, i) => (
            <div key={i} style={{ fontFamily: 'monospace', fontSize: 13, marginBottom: 4 }}>
              <strong>[{issue.path}]</strong>: {issue.message}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
