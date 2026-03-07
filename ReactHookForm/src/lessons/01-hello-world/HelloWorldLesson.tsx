// Lesson 01: Hello World
// docs/01-hello-world.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] useForm() を呼び出す
//   [ ] input に {...register('username')} を spread する
//   [ ] <form onSubmit={handleSubmit(onSubmit)}> を作る
//   [ ] onSubmit 関数でコンソールに data を表示する
//   [ ] 送信後にコンソールで入力値が確認できる

// import { useForm } from 'react-hook-form'

export default function HelloWorldLesson() {
  // useForm() を呼び出して handleSubmit と register を取り出す

  // onSubmit 関数を作る（引数: data）

  return (
    <div>
      <h2>Lesson 01: Hello World</h2>
      {/* <form> タグをここに作る */}
      {/* username の input と送信ボタンを追加する */}
    </div>
  )
}
