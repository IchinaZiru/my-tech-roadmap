// Lesson 08: Zod（スキーマバリデーション）
// docs/08-zod.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] z.object() でスキーマを定義する
//   [ ] z.infer<typeof schema> で TypeScript 型を生成する
//   [ ] zodResolver(schema) を useForm の resolver に渡す
//   [ ] z.string().min(2).max(20) など Zod のバリデーションを書く
//   [ ] パスワード確認（.refine() で2フィールドの一致チェック）

// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'

// const schema = z.object({
//   username: z.string().min(2, '2文字以上で入力してください'),
//   email: z.string().email('有効なメールアドレスを入力してください'),
//   password: z.string().min(8, '8文字以上で入力してください'),
//   confirmPassword: z.string(),
// }).refine(/* ここにパスワード一致チェックを書く */)

// type FormData = z.infer<typeof schema>

export default function ZodLesson() {
  // useForm<FormData>({ resolver: zodResolver(schema) }) を呼び出す

  return (
    <div>
      <h2>Lesson 08: Zod</h2>
      {/* username, email, password, confirmPassword のフォームを作る */}
      {/* スキーマのバリデーションエラーをそれぞれ表示する */}
    </div>
  )
}
