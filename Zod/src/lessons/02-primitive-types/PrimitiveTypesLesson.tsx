// Lesson 02: プリミティブ型
// docs/02-primitive-types.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] z.string() / z.number() / z.boolean() のスキーマをそれぞれ作る
//   [ ] 各スキーマに正しい値を渡して検証する
//   [ ] 各スキーマに間違った型の値を渡してエラーを確認する
//   [ ] z.null() / z.undefined() も試す

import { useState } from 'react'
// import { z } from 'zod'

type Result = { type: string; value: unknown; success: boolean; message: string }

export default function PrimitiveTypesLesson() {
  const [results, setResults] = useState<Result[]>([])

  function handleValidate() {
    const newResults: Result[] = []

    // TODO: z.string() で "hello" を検証して newResults に追加する
    // TODO: z.number() で 42 を検証して newResults に追加する
    // TODO: z.boolean() で true を検証して newResults に追加する
    // TODO: z.string() に 123（数値）を渡してエラーを確認する
    //       （try/catch を使う）

    setResults(newResults)
  }

  return (
    <div style={{ maxWidth: 600 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Lesson 02: プリミティブ型
      </h2>

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
        全スキーマを検証する
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {results.map((r, i) => (
          <div
            key={i}
            style={{
              padding: 12,
              background: r.success ? '#f0fdf4' : '#fef2f2',
              border: `1px solid ${r.success ? '#86efac' : '#fca5a5'}`,
              borderRadius: 8,
              fontFamily: 'monospace',
              fontSize: 13,
            }}
          >
            <strong>{r.type}</strong>: {String(r.value)} → {r.message}
          </div>
        ))}
      </div>
    </div>
  )
}
