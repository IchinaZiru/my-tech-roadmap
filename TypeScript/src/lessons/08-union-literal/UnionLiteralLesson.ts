// Lesson 08: Union & Literal Types
// docs/08-union-literal.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] ユニオン型（string | number）の変数を作る
//   [ ] リテラル型（'admin' | 'user' | 'guest'）で Role 型を定義する
//   [ ] Role を受け取って処理を分岐する関数を書く
//   [ ] 判別可能なユニオン（discriminated union）を1つ作る

type Role = 'admin' | 'user' | 'guest'

type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }

export function run(): string {
  // ここに実装する
  let id: string | number = 'abc123'
  id = 42

  function getPermissions(role: Role): string {
    switch(role){
      case 'admin': return "フルアクセス"
      case 'user': return "閲覧・編集"
      case 'guest': return "閲覧のみ"
    }
  }

  const circle: Shape = {kind: "circle", radius: 5}
  const rect: Shape = {kind: "rectangle", width: 10, height: 20}
  return `
  <h1>Lesson 08: Union & Literal Types</h1>
  <h2>---ユニオン型---</h2>
  <p>id = ${id}</p>

  <h2>---リテラル型---</h2>
  <p>adminの権限: ${getPermissions('admin')}</p>
  <p>userの権限: ${getPermissions('user')}</p>
  <p>guestの権限: ${getPermissions('guest')}</p>

  <h2>---判別可能なユニオン---</h2>
  <p>Circle: 面積 = ${circle.radius * circle.radius * Math.PI}</p>
  <p>Rectangle: 面積 = ${rect.width * rect.height}</p>
  `
}
