// Lesson 01: Hello World
// docs/01-hello-world.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] z.string() でスキーマを作る
//   [ ] .parse("Hello, Zod!") で文字列を検証する
//   [ ] 検証結果を画面に表示する
//   [ ] 数値を渡したとき（.parse(123)）にどうなるか確認する

import { useState } from 'react'
// import { z } from 'zod'  // ← コメントを外してZodをインポートする

export default function HelloWorldLesson() {
  const [result, setResult] = useState<string>('')

  function handleValidate() {
    // TODO: ここにスキーマを定義する
    // const schema = ...

    // TODO: .parse() で検証してresultに結果を表示する
    setResult('まだ実装されていません')
  }

  return (
    <div style={{ maxWidth: 600 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Lesson 01: Hello World
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
        検証する
      </button>

      {result && (
        <div style={{
          padding: 16,
          background: '#f0fdf4',
          border: '1px solid #86efac',
          borderRadius: 8,
          fontFamily: 'monospace',
          fontSize: 14,
        }}>
          {result}
        </div>
      )}
    </div>
  )
}
