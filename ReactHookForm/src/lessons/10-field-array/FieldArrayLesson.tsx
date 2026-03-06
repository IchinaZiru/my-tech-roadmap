// Lesson 10: useFieldArray（動的フォーム）
// docs/10-field-array.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] useFieldArray({ control, name: 'skills' }) を呼び出す
//   [ ] fields.map() でスキルフィールドをレンダリングする
//   [ ] 各フィールドは register('skills.${index}.name') で登録する
//   [ ] append({ name: '' }) で新しいスキルを追加する
//   [ ] remove(index) でスキルを削除する
//   [ ] 送信時に全スキルの一覧が取れる

// import { useForm, useFieldArray } from 'react-hook-form'

// type Skill = {
//   name: string
// }
// type FormData = {
//   projectName: string
//   skills: Skill[]
// }

export default function FieldArrayLesson() {
  // useForm<FormData>({ defaultValues: { projectName: '', skills: [{ name: '' }] } }) を呼び出す
  // control を取り出す

  // useFieldArray({ control, name: 'skills' }) を呼び出す
  // fields, append, remove を取り出す

  return (
    <div>
      <h2>Lesson 10: useFieldArray</h2>
      {/* projectName の input を作る */}
      {/* skills: fields.map() で各スキルの input + 削除ボタンを作る */}
      {/* 「スキルを追加」ボタンで append する */}
      {/* 送信後にスキル一覧を表示する */}
    </div>
  )
}
