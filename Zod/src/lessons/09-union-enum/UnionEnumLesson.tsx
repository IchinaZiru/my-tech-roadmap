// Lesson 09: Union と Enum
// docs/09-union-enum.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] z.union([z.string(), z.number()]) で複数の型を受け付けるスキーマを作る
//   [ ] z.enum(["red", "green", "blue"]) で固定値の列挙を作る
//   [ ] z.literal("admin") で特定の値だけ受け付けるスキーマを作る
//   [ ] enum に含まれない値を渡したときのエラーを確認する
//   [ ] z.nativeEnum() で TypeScript の enum を使う方法も知る

import { useState } from 'react'
// import { z } from 'zod'

// TODO: スキーマを定義する
// const colorSchema = z.enum(["red", "green", "blue"])
// const statusSchema = z.union([z.literal("active"), z.literal("inactive"), z.literal("pending")])
// const idSchema = z.union([z.string(), z.number()])

export default function UnionEnumLesson() {
  const [color, setColor] = useState('red')
  const [status, setStatus] = useState('active')
  const [id, setId] = useState('123')
  const [results, setResults] = useState<{ label: string; success: boolean; message: string }[]>([])

  function handleValidate() {
    // TODO: 各値をそれぞれのスキーマで safeParse する
    // 結果を results にセットする
    setResults([
      { label: 'color', success: false, message: 'まだ実装されていません' },
      { label: 'status', success: false, message: 'まだ実装されていません' },
      { label: 'id (文字列として)', success: false, message: 'まだ実装されていません' },
      { label: 'id (数値として)', success: false, message: 'まだ実装されていません' },
    ])
  }

  const selectStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 14,
    marginBottom: 4,
    background: '#fff',
  }

  return (
    <div style={{ maxWidth: 500 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Lesson 09: Union と Enum
      </h2>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>色（enum）</label>
        <select value={color} onChange={e => setColor(e.target.value)} style={selectStyle}>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="purple">purple（不正な値）</option>
        </select>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>ステータス（union of literals）</label>
        <select value={status} onChange={e => setStatus(e.target.value)} style={selectStyle}>
          <option value="active">active</option>
          <option value="inactive">inactive</option>
          <option value="pending">pending</option>
          <option value="deleted">deleted（不正な値）</option>
        </select>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>ID（文字列または数値）</label>
        <input value={id} onChange={e => setId(e.target.value)} style={{ ...selectStyle, display: 'block' }} placeholder="例: 123 または abc" />
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
          marginBottom: 16,
        }}
      >
        検証する
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {results.map((r, i) => (
          <div key={i} style={{
            padding: 12,
            background: r.success ? '#f0fdf4' : '#fef2f2',
            border: `1px solid ${r.success ? '#86efac' : '#fca5a5'}`,
            borderRadius: 8,
            fontSize: 13,
          }}>
            <strong>{r.success ? '✅' : '❌'} {r.label}</strong>
            <div style={{ fontFamily: 'monospace', marginTop: 4 }}>{r.message}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
