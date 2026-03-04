// Lesson 10: Type Narrowing
// docs/10-type-narrowing.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] typeof を使って string | number を絞り込む
//   [ ] instanceof を使って Date | Error を絞り込む
//   [ ] in 演算子を使ってプロパティの有無で絞り込む
//   [ ] ユーザー定義型ガード（is 構文）を1つ実装する

export function run(): string {
  // ここに実装する
  let id: string | number = "Hello"
  let value: Date | Error = new Date()

  function formatId(id: string | number):string{
    if(typeof id === 'string'){
      return `ID: ${id.toUpperCase()}`
    }
    return `ID: ${id.toString()}`
  }

  // instanceof: クラスのインスタンスかどうかで絞り込む
  function describe(value: Date | Error): string {
    if (value instanceof Date) {
      return `日付: ${value.toLocaleDateString()}`
    }
    return `エラー: ${value.message}`
  }

  // in 演算子: プロパティが存在するかで絞り込む
  type Bird = { fly: () => void }
  type Fish = { swim: () => void }
  function isBird(animal: Bird | Fish): animal is Bird {
    return 'fly' in animal
  }

  // ユーザー定義型ガード: 戻り値を "引数名 is 型" と書く
  function isString(value: unknown): value is string {
    return typeof value === 'string'
  }
  return `
  <h1>Lesson10: Type Narrowing</h1>
  <h2>---typeof---</h2>
  <p>formatId("abc") = ${formatId("abc")}</p>
  <p>formatId(42) = ${formatId(42)}</p>

  <h2>---instanceof---</h2>
  <p>describe(new Date()) = ${describe(new Date())}</p>
  <p>describe(new Error("oops")) = ${describe(new Error("oops"))}</p>

  <h2>---in 演算子---</h2>
  <p>isBird({fly: true}) = ${isBird({fly: () => {}})}</p>
  <p>isBird({swim: true}) = ${isBird({swim: () => {}})}</p>

  <h2>---ユーザー定義型ガード---</h2>
  <p>isString("hello") = ${isString("hello")}</p>
  <p>isString(123) = ${isString(123)}</p>
  `
}
