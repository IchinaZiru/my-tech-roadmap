// Lesson 10: Transform と Default
// docs/10-transform-default.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] .transform(val => ...) で検証後にデータを変換する
//   [ ] .default(値) で値がない場合のデフォルトを設定する
//   [ ] .trim() で文字列の前後の空白を除去する
//   [ ] .toLowerCase() / .toUpperCase() で大文字小文字を統一する
//   [ ] z.preprocess() で検証前にデータを前処理する

import { useState } from 'react'
// import { z } from 'zod'

// TODO: transform を使ったスキーマを定義する
// const trimmedNameSchema = z.string().trim().min(1)
// const upperCaseTagSchema = z.string().toUpperCase()
// const numberFromStringSchema = z.preprocess(
//   (val) => Number(val),
//   z.number().positive()
// )
// const withDefaultSchema = z.string().default("ゲスト")

export default function TransformDefaultLesson() {
  const [name, setName] = useState('  alice  ')
  const [tag, setTag] = useState('javascript')
  const [numStr, setNumStr] = useState('42')
  const [results, setResults] = useState<{ label: string; input: string; output: string }[]>([])

  function handleTransform() {
    // TODO: 各スキーマで値を変換してresultsにセットする
    // .parse() の戻り値が変換後の値になっていることを確認する
    setResults([
      { label: 'trim()', input: name, output: 'まだ実装されていません' },
      { label: 'toUpperCase()', input: tag, output: 'まだ実装されていません' },
      { label: 'preprocess: 文字列→数値', input: numStr, output: 'まだ実装されていません' },
      { label: 'default()', input: '（未入力）', output: 'まだ実装されていません' },
    ])
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
    <div style={{ maxWidth: 600 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Lesson 10: Transform と Default
      </h2>

      <div style={{ marginBottom: 12 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>名前（前後に空白を入れてみる）</label>
        <input value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>タグ（小文字で入力）</label>
        <input value={tag} onChange={e => setTag(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>数値文字列（文字列として渡す）</label>
        <input value={numStr} onChange={e => setNumStr(e.target.value)} style={inputStyle} />
      </div>

      <button
        onClick={handleTransform}
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
        変換する
      </button>

      {results.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {results.map((r, i) => (
            <div key={i} style={{
              padding: 12,
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 8,
              fontSize: 13,
            }}>
              <strong>{r.label}</strong>
              <div style={{ fontFamily: 'monospace', marginTop: 4 }}>
                入力: <span style={{ color: '#6366f1' }}>"{r.input}"</span>
                {' → '}
                出力: <span style={{ color: '#16a34a' }}>"{r.output}"</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
