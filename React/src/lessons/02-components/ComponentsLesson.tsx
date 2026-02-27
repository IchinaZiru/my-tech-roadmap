// Lesson 02: Components（コンポーネント）
// docs/02-components.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] 小さなコンポーネントを2〜3個作る
//   [ ] 作ったコンポーネントを別のコンポーネントの中で使う（入れ子）
//   [ ] 同じコンポーネントを2回以上使って「再利用」を確認する

// ここにコンポーネントを定義する
function Header() {
  return <h1>header here</h1>
}

function Card() {
  return <div>card here</div>
}

function Footer() {
  return <footer>footer here</footer>
}

export default function ComponentsLesson() {
  return (
    <div>
      <h2>Lesson 02: Components</h2>
      {/* ここにコンポーネントを配置する */}
      <Header />
        <Card />
        <Card />
      <Footer />
    </div>
  )
}
