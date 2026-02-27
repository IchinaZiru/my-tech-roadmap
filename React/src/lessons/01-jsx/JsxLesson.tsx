// Lesson 01: JSX
// docs/01-jsx.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] 変数を {} で埋め込む（文字列・数値・式）
//   [ ] className でCSSクラスを指定する
//   [ ] style={{ }} でインラインスタイルを書く（オブジェクト形式）
//   [ ] 複数の要素を1つのルート要素で囲む

export default function JsxLesson() {
  // ここに実装する
  const name = "おにぎり";
  const price = 150;

  return (
    <div>
      <h2>Lesson 01: JSX</h2>
      {/* ここにコードを追加する */}
      <h1
      style ={{
        color: "blue",
        backgroundColor: "lightblue",
        padding: "10px",
        borderRadius: "5px",
        fontSize:"24px"
      }}
      >
        Hello, {name}!</h1>
      <p className="highlight">価格: ¥{price}</p>
    </div>
  )
}
