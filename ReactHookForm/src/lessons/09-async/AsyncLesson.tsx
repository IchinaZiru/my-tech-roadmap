import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('有効なメールアドレスを入力してください'),
  password: z.string().min(6, '6文字以上で入力してください'),
})

type FormData = z.infer<typeof schema>

// 模擬APIコール（50%の確率で失敗する）
const fakeLogin = (data: FormData): Promise<void> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve()
        : reject(new Error('ログインに失敗しました'))
    }, 1500)
  )

export default function AsyncLesson() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: FormData) => {
    try {
      setStatus('idle')
      await fakeLogin(data)
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div>
      <h2>Lesson 09: async</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '送信中...' : 'ログイン'}
        </button>
      </form>

      {status === 'success' && (
        <p style={{ color: 'green' }}>ログイン成功！</p>
      )}

      {status === 'error' && (
        <p style={{ color: 'red' }}>ログインに失敗しました</p>
      )}
    </div>
  )
}
