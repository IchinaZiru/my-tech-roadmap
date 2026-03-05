// Lesson 01: Hello World
// docs/01-hello-world.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] テキストに色をつける（text-{color}-{shade}）
//   [ ] テキストサイズを大きくする（text-xl, text-3xl など）
//   [ ] テキストを太字にする（font-bold）
//   [ ] 背景色をつける（bg-{color}-{shade}）
//   [ ] インラインスタイルとクラスの違いを体感する

export default function HelloWorldLesson() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 01: Hello World</h2>
      {/* ここにコードを追加する */}
      <p className="text-blue-900 text-xl">Hello World</p>
      <p style={{ color: '#1e3a8a', fontSize: '1.25rem' }}>Hello with style</p>

      <div className="bg-red-100">box</div>
      <p className="font-bold">太字</p>
    </div>
  )
}
