// Lesson 05: Optional と Nullable
// docs/05-optional-nullable.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] .optional() をつけたフィールドは undefined でも通ることを確認する
//   [ ] .nullable() をつけたフィールドは null でも通ることを確認する
//   [ ] .optional() と .nullable() の違いを説明できる
//   [ ] .nullish() （両方許容）も試す
//   [ ] undefinedと null を渡して差を体感する

import { useState } from 'react'
// import { z } from 'zod'

// TODO: optional/nullable フィールドを持つスキーマを定義する
// const profileSchema = z.object({
//   name: z.string(),
//   nickname: z.string().optional(),   // undefinedを許容
//   bio: z.string().nullable(),        // nullを許容
//   website: z.string().nullish(),     // null と undefined の両方を許容
// })

type TestCase = { label: string; data: unknown }

const testCases: TestCase[] = [
  { label: '全フィールドあり', data: { name: 'Alice', nickname: 'Ali', bio: '開発者です', website: 'https://example.com' } },
  { label: 'nickname なし（undefined）', data: { name: 'Bob', bio: '学生です' } },
  { label: 'bio が null', data: { name: 'Carol', bio: null } },
  { label: 'website が null', data: { name: 'Dave', bio: 'エンジニア', website: null } },
]

export default function OptionalNullableLesson() {
  const [results, setResults] = useState<{ label: string; success: boolean; message: string }[]>([])

  function handleValidate() {
    // TODO: testCases の各データを profileSchema で検証する
    // 成功・失敗をresultsにセットする
    setResults(testCases.map(tc => ({
      label: tc.label,
      success: false,
      message: 'まだ実装されていません',
    })))
  }

  return (
    <div style={{ maxWidth: 600 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Lesson 05: Optional / Nullable
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
        全ケースを検証する
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
              fontSize: 13,
            }}
          >
            <strong>{r.success ? '✅' : '❌'} {r.label}</strong>
            <div style={{ fontFamily: 'monospace', marginTop: 4 }}>{r.message}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
