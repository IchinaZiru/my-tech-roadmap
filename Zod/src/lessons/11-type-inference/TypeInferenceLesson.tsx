// Lesson 11: 型推論
// docs/11-type-inference.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] z.infer<typeof schema> でスキーマからTypeScript型を生成する
//   [ ] 生成した型を変数の型注釈として使う
//   [ ] スキーマを変更したときに型も自動で変わることを確認する
//   [ ] z.input<> と z.output<> の違いを確認する（transform がある場合）
//   [ ] 型をexportして他のファイルから使う書き方を理解する

// import { z } from 'zod'

// TODO: スキーマと型を定義する
// const userSchema = z.object({
//   id: z.number(),
//   name: z.string(),
//   email: z.string().email(),
//   role: z.enum(["admin", "user", "guest"]),
//   createdAt: z.string().datetime().optional(),
// })
//
// type User = z.infer<typeof userSchema>  // ← この型をTypeScriptが自動生成する

// TODO: transform を持つスキーマで input/output 型の違いを確認する
// const processedSchema = z.object({
//   score: z.string().transform(val => Number(val)),
// })
// type ProcessedInput = z.input<typeof processedSchema>   // { score: string }
// type ProcessedOutput = z.output<typeof processedSchema> // { score: number }

// TODO: 上で定義した User 型を使って関数を書く
// function displayUser(user: User): string {
//   return `${user.name} (${user.role})`
// }

const sampleData = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  role: 'admin',
}

export default function TypeInferenceLesson() {
  // TODO: sampleData を userSchema.parse() で検証して、戻り値の型が User になることを確認する
  // TypeScript のホバーで型を確認しながら実装する

  return (
    <div style={{ maxWidth: 600 }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Lesson 11: 型推論
      </h2>

      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 14, color: '#374151', marginBottom: 12 }}>
          このレッスンは UI 操作よりも <strong>TypeScript の型チェック</strong> が主役です。
          コードを書きながら VSCode のホバーで型が推論されていることを確認してください。
        </p>
      </div>

      <div style={{ padding: 16, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, marginBottom: 16 }}>
        <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>サンプルデータ:</p>
        <pre style={{ fontFamily: 'monospace', fontSize: 13 }}>{JSON.stringify(sampleData, null, 2)}</pre>
      </div>

      <div style={{ padding: 16, background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 8 }}>
        <p style={{ fontSize: 13 }}>
          💡 <strong>ヒント</strong>: <code>z.infer&lt;typeof userSchema&gt;</code> にマウスをホバーすると、
          TypeScript が自動生成した型を確認できます。
        </p>
      </div>
    </div>
  )
}
