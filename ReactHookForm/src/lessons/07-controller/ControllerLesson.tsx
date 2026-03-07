// Lesson 07: Controller（カスタムUIの統合）
// docs/07-controller.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] <Controller> で select ボックスを登録する
//   [ ] <Controller> で checkbox を登録する（boolean型）
//   [ ] <Controller> の render prop で { field } を受け取る
//   [ ] field.onChange, field.value を カスタムUIに渡す
//   [ ] 送信時に select と checkbox の値が正しく取れる

// import { useForm, Controller } from 'react-hook-form'

// type FormData = {
//   username: string
//   role: 'frontend' | 'backend' | 'fullstack'
//   agreeToTerms: boolean
// }

export default function ControllerLesson() {
  // useForm<FormData>({ defaultValues: { role: 'frontend', agreeToTerms: false } }) を呼び出す
  // control を取り出す

  return (
    <div>
      <h2>Lesson 07: Controller</h2>
      {/* username: 通常の register で登録 */}
      {/* role: <Controller> で select を登録 */}
      {/* agreeToTerms: <Controller> で checkbox を登録 */}
    </div>
  )
}
