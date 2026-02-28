// Lesson 03: Props
// docs/03-props.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] Props を受け取るコンポーネントを作る
//   [ ] 文字列・数値・真偽値の3種類のPropsを渡す
//   [ ] 同じコンポーネントに異なるPropsを渡して3回表示する
//   [ ] Props の値によって表示内容が変わるようにする

// Props を受け取るコンポーネントをここに定義する
import UseCard from './props/props'

export default function PropsLesson() {
  return (
    <div>
      <h2>Lesson 03: Props</h2>
      {/* コンポーネントに Props を渡して表示する */}
      <UseCard name="田中" role="管理者" activate={true} age={14}></UseCard>
      <UseCard name="鈴木" role="メンバー" activate={false} age={20}></UseCard>
      <UseCard name="佐藤" role="ゲスト"age={25}></UseCard>
    </div>
  )
}
