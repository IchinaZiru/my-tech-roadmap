// Lesson 02: Basic Types
// docs/02-basic-types.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] string 型の変数を宣言して表示する
//   [ ] number 型の変数を宣言して表示する
//   [ ] boolean 型の変数を宣言して表示する
//   [ ] null と undefined の違いを変数で示す
//   [ ] 各変数の型を画面上にラベルとして表示する


export function run(): string {
  // ここに実装する
const stack : string = "TypeScript"
const count : number = 42
const isReady : boolean = false
const nothing : null = null
const missing : undefined = undefined
  return `
  <h2> string: ${stack}</h2>
  <h2>number : ${count}</h2>
  <h2>Boolean : ${isReady}</h2>
  <h2>Null : ${nothing}</h2>
  <h2>Undefined : ${missing}</h2>
  `
}
