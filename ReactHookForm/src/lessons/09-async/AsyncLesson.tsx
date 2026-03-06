// Lesson 09: async（非同期送信）
// docs/09-async.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] onSubmit を async 関数にする
//   [ ] setTimeout で API 呼び出しを模擬する（1秒待つ）
//   [ ] formState.isSubmitting で送信中かどうかを判定する
//   [ ] 送信中はボタンを disabled にして「送信中...」と表示する
//   [ ] 送信成功後に成功メッセージを表示する
//   [ ] 送信失敗（エラー）時にエラーメッセージを表示する

// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'

// const schema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// })
// type FormData = z.infer<typeof schema>

// // 模擬APIコール（50%の確率で失敗する）
// const fakeLogin = (data: FormData): Promise<void> =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       Math.random() > 0.5 ? resolve() : reject(new Error('ログインに失敗しました'))
//     }, 1500)
//   )

export default function AsyncLesson() {
  // useForm<FormData>({ resolver: zodResolver(schema) }) を呼び出す
  // formState: { errors, isSubmitting } を取り出す

  // 成功・失敗のメッセージ用 state を追加する

  return (
    <div>
      <h2>Lesson 09: async</h2>
      {/* ログインフォーム（email, password）を作る */}
      {/* 送信中はボタンを disabled にして「送信中...」と表示する */}
      {/* 成功/失敗メッセージを表示する */}
    </div>
  )
}
