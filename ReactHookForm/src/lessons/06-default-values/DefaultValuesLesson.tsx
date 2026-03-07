// Lesson 06: defaultValues（デフォルト値とリセット）
// docs/06-default-values.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] useForm({ defaultValues: {...} }) で初期値を設定する
//   [ ] フォームを開いたとき入力欄に初期値が入っている
//   [ ] reset() ボタンでフォームを初期値に戻す
//   [ ] reset({ ...newValues }) で別の値にリセットする
//   [ ] 「プロフィール編集」モードを模した UI を作る（初期値 = 既存データ）

// import { useForm } from 'react-hook-form'

// type ProfileForm = {
//   username: string
//   email: string
//   bio: string
// }

// // 「サーバーから取得した」既存データ（模擬）
// const existingProfile: ProfileForm = {
//   username: 'tanaka_taro',
//   email: 'tanaka@example.com',
//   bio: 'フロントエンドエンジニアです。',
// }

export default function DefaultValuesLesson() {
  // useForm<ProfileForm>({ defaultValues: existingProfile }) を呼び出す

  return (
    <div>
      <h2>Lesson 06: defaultValues</h2>
      {/* プロフィール編集フォームを作る */}
      {/* 「リセット」ボタンで初期値に戻す */}
      {/* 「別のユーザーで上書き」ボタンで reset({ ...newValues }) を試す */}
    </div>
  )
}
