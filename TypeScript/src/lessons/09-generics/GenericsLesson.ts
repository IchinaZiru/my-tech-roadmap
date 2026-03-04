// Lesson 09: Generics
// docs/09-generics.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] identity<T>(value: T): T 関数を実装する
//   [ ] first<T>(arr: T[]): T | undefined 関数を実装する
//   [ ] 複数の型パラメータ <T, U> を持つ関数を1つ書く
//   [ ] ジェネリック型制約（T extends object）を使った関数を書く

export function run(): string {
  // ここに実装する
  function identity<T>(value: T): T{
    return value
  }

  function first<T>(arr: T[]): T | undefined {
    return arr[0]
  }

  // 複数の型パラメータ
  function pair<T, U>(first: T, second: U): { first: T; second: U } {
    return { first, second }
  }

  // 型制約: T extends object → オブジェクトしか受け付けない
  function keys<T extends object>(obj: T): string[] {
    return Object.keys(obj)
  }
  return `
  <h1>Lesson09: Generics</h1>
  <h2>--- identity ---</h2>
  <p>identity("hello") = ${identity("hello")}(型 : ${typeof "hello"}  )</p>
  <p>identity(42) = ${identity(42)} (型 : ${typeof 42})</p>

  <h2>--- first ---</h2>
  <p>first(["a","b","c"]) = "${first(["a","b","c"])}"</p>
  <p>first([]) = ${first([])}</p>

  <h2>--- pair ---</h2>
  <p>pair("名前",25) = ${JSON.stringify(pair("名前",25))}</p>

  <h2>--- keys ---</h2>
  <p>keys({name: "田中", age: 25}) = ${JSON.stringify(keys({name: "田中", age: 25}))}</p>

  `
}
