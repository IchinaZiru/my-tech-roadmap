// Lesson 01: Hello World
// docs/01-hello-world.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] string 型の変数に名前を入れて表示する
//   [ ] number 型の変数に年齢を入れて表示する
//   [ ] 型アノテーション（: string, : number）を明示的に書く
//   [ ] 返すHTMLに <h2>Lesson 01: Hello World</h2> を含める

export function run(): string {
  // ここに実装する
  const name : string = "Hello"
  const age : number = 20
  return `<h2>Lesson 01: Hello World</h2><p>名前: ${name}, 年齢: ${age}</p>`
}


