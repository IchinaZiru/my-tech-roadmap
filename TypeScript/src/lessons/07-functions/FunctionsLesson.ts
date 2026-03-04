// Lesson 07: Functions
// docs/07-functions.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] 引数と戻り値に型を付けた関数を書く（add(a: number, b: number): number）
//   [ ] オプション引数（greeting?: string）を持つ関数を書く
//   [ ] デフォルト引数（greeting = 'こんにちは'）を持つ関数を書く
//   [ ] 関数型を変数に代入する（const fn: (x: number) => string = ...）

export function run(): string {
  // ここに実装する
  function add(a: number, b: number): number {
    return a + b
  }

  function greet(name: string,greeting?: string): string {
    const g = greeting ?? 'こんにちは'
    return `${g},${name}さん！`
  }

  function greet2(name: string, greeting = 'こんにちは'): string {
    return `${greeting}、${name}さん！`
  }
  const double: (x: number) => string = (x) => String(x * 2)
  return `
  <h1>Lesson 07: Functions</h1>
  <p>add(3,4) = ${add(3, 4)}</p>

  <p>greet("田中") = ${greet("田中")}</p>
  <p>greet("田中","やあ") = ${greet("田中","やあ")}</p>

  <p>greet2("田中") = ${greet2("田中")}</p>
  <p>greet2("田中","やあ") = ${greet2("田中","やあ")}</p>

  <p>double(5) = ${double(5)}</p>

  <p>関数型 : (x: number) => string</p>
  `
}
