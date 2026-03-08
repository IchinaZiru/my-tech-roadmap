// Lesson 05: watch（リアルタイム監視）
// docs/05-watch.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] watch() で全フィールドをリアルタイム監視する
//   [ ] watch('username') で特定フィールドだけ監視する
//   [ ] 入力しながら「プレビュー」エリアにリアルタイム表示する
//   [ ] 文字数カウンター（username は最大20文字）を表示する
//   [ ] password と confirmPassword が一致するかリアルタイムで判定する

import { useForm } from 'react-hook-form'

type FormData = {
  username: string
  password: string
  confirmPassword: string
}

export default function WatchLesson() {
  // useForm<FormData>() から watch も取り出す
  const { register, watch } = useForm<FormData>()
  const[password, confirmPassword] = 
  watch(['password', 'confirmPassword'])

  const watchedValues = watch()        // 全フィールド監視
  const username = watch('username')   // 特定フィールド監視

  const passwordMatch = password === confirmPassword && password !== ''


  return (
    <div>
      <h2>Lesson 05: watch</h2>
      {/* username, password, confirmPassword のフォームを作る */}
      {/* フォームの横に「プレビュー」エリアを作り、入力値をリアルタイム表示する */}
      <form>
        <div>
          <label>Username:</label>
          <input {...register('username')} />
          <p>{username.length} / 20</p>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...register('password')} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" {...register('confirmPassword')} />
        </div>
        {password || confirmPassword ? (
          passwordMatch ? (
            <p style={{ color: 'green' }}>Passwords match</p>
          ) : (
            <p style={{ color: 'red' }}>Passwords do not match</p>
          )
        ) : null}
      </form>
        <div>
          <h3>リアルタイムプレビュー</h3>
          <pre>{JSON.stringify(watchedValues, null, 2)}</pre>
        </div>
    </div>
  )
}
