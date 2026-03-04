// Lesson 03: Type Inference
// docs/03-type-inference.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] 型アノテーションなしで変数を宣言し、TypeScriptが型を推論することを確認する
//   [ ] let と const の推論の違いを示す（widened type vs literal type）
//   [ ] 関数の戻り値型が自動推論されることを示す
//   [ ] 型推論が失敗するケース（any になるケース）を1つ示す



export function run(): string {
  // ここに実装する
  const x = "Hello"
  let y = "Hello"
  const z =[]
    
  function double(n: number) {
    return n * 2
  }
  return `
  const x = "hello" 型 "Hello"
  const y = "hello" 型 string
  const z = [] 型 any
  double = ${double(10)} : 型 number
  `
}
