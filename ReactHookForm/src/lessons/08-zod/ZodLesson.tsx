// Lesson 08: Zod（スキーマバリデーション）
// docs/08-zod.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] z.object() でスキーマを定義する
//   [ ] z.infer<typeof schema> で TypeScript 型を生成する
//   [ ] zodResolver(schema) を useForm の resolver に渡す
//   [ ] z.string().min(2).max(20) など Zod のバリデーションを書く
//   [ ] パスワード確認（.refine() で2フィールドの一致チェック）
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  username: z.string().min(2, '2文字以上で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  password: z.string().min(8, '8文字以上で入力してください'),
  confirmPassword: z.string(),
 }).refine((data) => data.password === data.confirmPassword, {
  message: 'パスワードが一致しません',
  path: ['confirmPassword'],
})

type FormData = z.infer<typeof schema>

export default function ZodLesson() {
  // useForm<FormData>({ resolver: zodResolver(schema) }) を呼び出す
  const { register, handleSubmit, formState: { errors
  } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  
  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div>
      <h2>Lesson 08: Zod</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>ユーザー名</label>
          <input
            type="text"
            {...register('username')}
            placeholder="ユーザー名"
          />
          <p style={{ color: 'red', fontSize: '0.8rem' }}>
            {errors.username?.message}
          </p>
        </div>

        <div>
          <label>メールアドレス</label>
          <input
            type="email"
            {...register('email')}
            placeholder="メールアドレス"
          />
          <p style={{ color: 'red', fontSize: '0.8rem' }}>
            {errors.email?.message}
          </p>
        </div>

        <div>
          <label>パスワード</label>
          <input
            type="password"
            {...register('password')}
            placeholder="パスワード"
          />
          <p style={{ color: 'red', fontSize: '0.8rem' }}>
            {errors.password?.message}
          </p>
        </div>

        <div>
          <label>確認用パスワード</label>
          <input
            type="password"
            {...register('confirmPassword')}
            placeholder="確認用パスワード"
          />
          <p style={{ color: 'red', fontSize: '0.8rem' }}>
            {errors.confirmPassword?.message}
          </p>
        </div>

        <button type="submit">送信</button>
      </form>
    </div>
  )

}
